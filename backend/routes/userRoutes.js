const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// User signup
router.post('/signup', async (req, res) => {
  try {
    const { username, password, userType } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role: userType });
    await user.save();
    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.status(201).json({ user: { username: user.username, role: user.role }, token });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { username, password, userType } = req.body;
    const user = await User.findOne({ username, role: userType });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or user type' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ user: { username: user.username, role: user.role }, token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
});

module.exports = router;