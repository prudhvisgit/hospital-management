const express = require('express');
const router = express.Router();

// Mock endpoints for AI features

// @route   POST /api/ai/symptom-checker
// @desc    Analyze symptoms and suggest diseases & doctors
// @access  Public
router.post('/symptom-checker', (req, res) => {
    const { symptoms } = req.body;

    // Mock response
    res.json({
        symptomsAnalyzed: symptoms,
        possibleDiseases: ['Common Cold', 'Seasonal Allergies'],
        recommendedSpecialization: 'General Physician',
        urgency: 'Low'
    });
});

// @route   POST /api/ai/summarize-report
// @desc    Summarize complex medical report
// @access  Public
router.post('/summarize-report', (req, res) => {
    // In reality, this would take a report text or file extract
    res.json({
        summary: "Your blood test results are mostly normal. Cholesterol is slightly elevated. The doctor recommends a balanced diet and regular exercise.",
        keyPoints: ["Normal blood sugar", "Slightly high cholesterol", "Diet change recommended"]
    });
});

// @route   POST /api/ai/chatbot
// @desc    Chatbot for health questions
// @access  Public
router.post('/chatbot', (req, res) => {
    const { message } = req.body;

    res.json({
        reply: `I am an AI assistant. You asked: "${message}". Please consult a doctor for a professional opinion.`,
        suggestedActions: ["Book Appointment", "Symptom Checker"]
    });
});

module.exports = router;
