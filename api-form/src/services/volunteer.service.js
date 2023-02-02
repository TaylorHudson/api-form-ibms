const Volunteer = require('../models/Volunteer');

const create = (body) => {
  return Volunteer.create(body);
}

const findAll = () => {
  return Volunteer.find();
}

const findById = (id) => {
  return Volunteer.findById(id);
}

const update = (
  id,
  name,
  phone,
  interest) => {
  return Volunteer.findOneAndUpdate({_id: id}, {name,phone,interest});
}

module.exports = {
  create,findAll,findById,update
};