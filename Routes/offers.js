const express = require('express');
const router = express.Router();
const Offers = require('../models/Offer');

// get all workouts
router.get('/', async (req, res) => {
  try {
    const offers = await Offers.find();
    res.send({ success: true, data: offers });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Something went wrong' });
  }
});

// add a workout
router.post('/', async (req, res) => {
  const offer = new Offers({
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
    experienceLevel: req.body.experienceLevel,
    educationLevel: req.body.educationLevel,
    type: req.body.type,
    roleType: req.body.roleType,
  });

  try {
    const savedOffer = await offer.save();
    res.send({ success: true, data: savedOffer });
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
});

// get workout by single id
router.get('/:id', async (req, res) => {
  try {
    const offer = await Offers.findById(req.params.id);
    res.send({ success: true, data: offer });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Resource not found' });
  }
});

// update workout
router.put('/:id', async (req, res) => {
  try {
    const updatedOffer = await Offers.findByIdAndUpdate(
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
          experienceLevel: req.body.educationLevel,
          type: req.body.type,
          roleType: req.body.roleType,
        },
      },
      { new: true }
    );

    res.json({ sucess: true, data: updatedOffer });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Resource not found' });
  }
});

// delete workout
router.delete('/:id', async (req, res) => {
  try {
    await Offers.findByIdAndDelete(req.params.id);
    res.send({ success: true, data: {} });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Something went wrong' });
  }
});

module.exports = router;
