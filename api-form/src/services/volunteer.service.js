const Volunteer = require('../models/Volunteer');

const create = (body) => {
  return Volunteer.create(body);
}

module.exports = {
  create,
};