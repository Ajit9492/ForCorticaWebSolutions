const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  minArea: Number,
  maxArea: Number,
  minPrice: Number,
  maxPrice: Number,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

const Submission = mongoose.model('Submission', submissionSchema);

// Endpoint to handle form submission
router.post('/submitform', async (req, res) => {
  const submission = new Submission(req.body);
  try {
    await submission.save();
    res.status(201).json(submission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint to get submission history
router.get('/getsubmissions', async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
