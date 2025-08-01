const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/add-user', async (req, res) => {
  try {
    const { name, dob, address,email, sex } = req.body;
    const user = new User({ name, dob, address, email, sex });
    await user.save();
    res.status(201).json({ message: 'User saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save user' });
  }
});

module.exports = router;
