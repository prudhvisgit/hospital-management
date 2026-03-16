const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    timeSlot: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'Pending',
    },
    queuePosition: {
        type: Number,
    },
    symptoms: {
        type: String,
    },
    type: {
        type: String,
        enum: ['In-Person', 'Telemedicine'],
        default: 'In-Person',
    }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
