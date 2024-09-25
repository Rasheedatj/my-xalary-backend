const express = require('express');
const router = express.Router();
const Jobs = require('../models/Job');

// get all meal
router.get('/', async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.send({ sucess: true, data: jobs });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Something went wrong' });
  }
});

// add a meal
router.post('/', async (req, res) => {
  const job = new Jobs({
    title: req.body.title,
    company: req.body.company,
    logo: req.body.logo,
    location: req.body.location,
    salary: req.body.salary,
    field: req.body.field,
    overview: req.body.overview,
    responsibilities: req.body.responsibilities,
    qualifications: req.body.qualifications,
    mustHaves: req.body.mustHaves,
    benefits: req.body.benefits,
    educationLevel: req.body.educationLevel,
    experienceLevel: req.body.educationLevel,
    type: req.body.type,
    roleType: req.body.roleType,
  });
  try {
    const savedJob = await job.save();
    res.send({ sucess: true, data: savedJob });
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
});

// get meal by single id
router.get('/:id', async (req, res) => {
  try {
    const job = await Jobs.findById(req.params.id);
    res.send({ sucess: true, data: job });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Resource not found' });
  }
});

// update meal
router.put('/:id', async (req, res) => {
  try {
    const updatedJob = await Jobs.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          company: req.body.company,
          logo: req.body.logo,
          location: req.body.location,
          salary: req.body.salary,
          field: req.body.field,
          overview: req.body.overview,
          responsibilities: req.body.responsibilities,
          qualifications: req.body.qualifications,
          mustHaves: req.body.mustHaves,
          benefits: req.body.benefits,
          educationLevel: req.body.educationLevel,
          type: req.body.type,
          roleType: req.body.roleType,
        },
      },
      { new: true }
    );

    res.json({ sucess: true, data: updatedJob });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Something went wrong' });
  }
});

// delete meal
router.delete('/:id', async (req, res) => {
  try {
    await Jobs.findByIdAndDelete(req.params.id);
    res.send({ success: true, data: {} });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Resource not found' });
  }
});

module.exports = router;
