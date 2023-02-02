const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  interest: {
    type: String,
    required: true,
  }
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;