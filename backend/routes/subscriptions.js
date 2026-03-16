const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { protect } = require('../middleware/auth');

// @route   POST /api/subscriptions
// @desc    Subscribe to a plan (Mock Payment)
// @access  Private
router.post('/', protect, async (req, res) => {
    const { plan } = req.body; // 'Monthly', 'Quarterly', 'Yearly'

    const validPlans = {
        Monthly: 30, // days
        Quarterly: 90,
        Yearly: 365
    };

    if (!validPlans[plan]) {
        return res.status(400).json({ message: 'Invalid plan selected' });
    }

    try {
        // Mock payment gateway success
        const user = await User.findById(req.user._id);

        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + validPlans[plan]);

        user.subscription = {
            plan,
            expiresAt
        };

        await user.save();

        res.json({ message: 'Subscription successful', subscription: user.subscription });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
