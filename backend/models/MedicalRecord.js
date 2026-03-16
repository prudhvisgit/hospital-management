const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
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
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
    },
    diagnosis: {
        type: String,
        required: true,
    },
    prescriptions: [{
        medicine: String,
        dosage: String,
        duration: String,
        instructions: String
    }],
    notes: {
        type: String,
    },
    reportUrl: {
        type: String, // URL to uploaded PDF/Image report
    }
}, { timestamps: true });

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
