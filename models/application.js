
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Enter  job title'],
  },
  company: {
    type: String,
    required: [true, 'Enter  company'],
  },
  location: {
    type: String,
    required: [true, 'Enter  location'],
  },
  salary: {
    type: [Number],
    required: [true, 'Enter salary'],
  },
  Field: {
    type: String,
    required: [true, 'Enter field'],
  },
  Overview: {
    type: String,
    required: [true, 'Enter  overview'],
  },
  Responsibilities: {
    type: [String],
    required: [true, 'Enter responsibilities'],
  },
  qualifications: {
    type: [String],
    required: [true, 'Enter qualifications'],
  },
  mustHaves: {
    type: [String],
    required: [true, 'Enter must haves'],
  },
  benefits: {
    type: [String],
    required: [true, 'Enter benefits'],
  },
  educationLevel: {
    type: String,
    required: [true, 'Enter education level'],
  },
  type: {
    type: String,
    required: [true, 'Enter type'],
  },
  roleType: {
    type: String,
    required: [true, 'Enter roleType'],
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('application', ApplicationSchema);
