const volunteerService = require('../services/volunteer.service');
const mongoose = require('mongoose');

const validId = (req, res, next) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid ID' });

    req.id = id;

    next();
  } catch (err) { res.status(500).send({ message: err.message }) }
}

const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const volunteer = await volunteerService.findById(id);
    if (!volunteer) return res.status(400).send({ message: 'Volunteer not found' });

    req.id = id;
    req.volunteer = volunteer;

    next();
  } catch (err) { res.status(500).send({ message: err.message }) }

}

module.exports = { validId, validUser };