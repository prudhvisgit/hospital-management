const express = require('express');
const router = express.Router();
const MedicalRecord = require('../models/MedicalRecord');
const { protect, doctor } = require('../middleware/auth');

// @route   POST /api/records
// @desc    Create a new medical record
// @access  Private (Doctor)
router.post('/', protect, doctor, async (req, res) => {
    const { patientId, appointmentId, diagnosis, prescriptions, notes, reportUrl } = req.body;

    try {
        const record = new MedicalRecord({
            patientId,
            doctorId: req.user._id,
            appointmentId,
            diagnosis,
            prescriptions,
            notes,
            reportUrl
        });

        const createdRecord = await record.save();
        res.status(201).json(createdRecord);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   GET /api/records
// @desc    Get user's medical records
// @access  Private
router.get('/', protect, async (req, res) => {
    try {
        let records;

        // If patient, check subscription access (Mock logic)
        if (req.user.role === 'Patient') {
            const hasSubscription = req.user.subscription && req.user.subscription.plan !== 'None';
            if (!hasSubscription) {
                return res.status(403).json({ message: 'Active subscription required to view medical records.' });
            }
            records = await MedicalRecord.find({ patientId: req.user._id }).populate('doctorId', 'name specialization');
        } else if (req.user.role === 'Doctor') {
            // Doctors can see records they created
            records = await MedicalRecord.find({ doctorId: req.user._id }).populate('patientId', 'name');
        } else {
            records = await MedicalRecord.find({}).populate('patientId doctorId', 'name');
        }

        res.json(records);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
