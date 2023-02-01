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

const deleteById = (id) => {
  Volunteer.deleteOne({_id: id});
}

module.exports = {
  create,findAll,findById,deleteById
};