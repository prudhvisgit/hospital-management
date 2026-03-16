const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const { protect, doctor } = require('../middleware/auth');

// @route   POST /api/appointments
// @desc    Book an appointment
// @access  Private
router.post('/', protect, async (req, res) => {
    const { doctorId, date, timeSlot, symptoms, type } = req.body;

    try {
        // Basic queue logic: count existing appointments for that doctor on that date
        const existingCount = await Appointment.countDocuments({
            doctorId,
            date: new Date(date).setHours(0, 0, 0, 0) // Needs proper date boundary logic in production
        });

        const appointment = new Appointment({
            patientId: req.user._id,
            doctorId,
            date,
            timeSlot,
            symptoms,
            type,
            queuePosition: existingCount + 1,
            status: 'Confirmed'
        });

        const createdAppointment = await appointment.save();
        res.status(201).json(createdAppointment);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   GET /api/appointments
// @desc    Get all appointments for the logged-in user
// @access  Private
router.get('/', protect, async (req, res) => {
    try {
        let appointments;
        if (req.user.role === 'Patient') {
            appointments = await Appointment.find({ patientId: req.user._id }).populate('doctorId', 'name specialization');
        } else if (req.user.role === 'Doctor') {
            appointments = await Appointment.find({ doctorId: req.user._id }).populate('patientId', 'name email');
        } else {
            appointments = await Appointment.find({}).populate('patientId doctorId', 'name');
        }
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   PUT /api/appointments/:id/status
// @desc    Update appointment status
// @access  Private (Doctor/Admin)
router.put('/:id/status', protect, async (req, res) => {
    try {
        const { status } = req.body;
        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        // Check if user is authorized to update this appointment
        if (req.user.role === 'Patient' && appointment.patientId.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        // Patients can only cancel
        if (req.user.role === 'Patient' && status !== 'Cancelled') {
            return res.status(401).json({ message: 'Patients can only cancel appointments' });
        }

        appointment.status = status;
        const updatedAppointment = await appointment.save();
        res.json(updatedAppointment);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
