const express = require('express');
const router = express.Router();
const Applications = require('../models/application');

// get all workouts
router.get('/', async (req, res) => {
  try {
    const applications = await Applications.find();
    res.send({ success: true, data: applications });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Something went wrong' });
  }
});

// add a workout
router.post('/', async (req, res) => {
  const application = new Applications({
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
    const savedApplication = await application.save();
    res.send({ success: true, data: savedApplication });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Something went wrong' });
  }
});

// get workout by single id
router.get('/:id', async (req, res) => {
  try {
    const application = await Applications.findById(req.params.id);
    res.send({ success: true, data: application });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Resource not found' });
  }
});

// update workout
router.put('/:id', async (req, res) => {
  try {
    const updatedApplication = await Applications.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          company: req.body.company,
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

    res.json({ sucess: true, data: updatedApplication });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Resource not found' });
  }
});

// delete workout
router.delete('/:id', async (req, res) => {
  try {
    await Applications.findByIdAndDelete(req.params.id);
    res.send({ success: true, data: {} });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Something went wrong' });
  }
});

module.exports = router;
