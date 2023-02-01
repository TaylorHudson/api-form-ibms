const volunteerService = require('../services/volunteer.service');
const mongoose = require('mongoose');

const findAll = async (req,res) => {
  const allVolunteers = await volunteerService.findAll();
  res.send(allVolunteers);
}

const findById = async (req,res) => {
  const id = req.params.id;

  if(mongoose.Types.ObjectId.isValid(id)) {
    const volunteer = await volunteerService.findById(id);
    res.send(volunteer);
  }
  else res.status(400).send({message: "Volunteer not found"});
}

const deleteById = async (req,res) => {
  const id = req.params.id;

  if(mongoose.Types.ObjectId.isValid(id)) {
    const response = await volunteerService.deleteById(id);
    res.status(204);
  }
  else res.status(400).send({message: "Volunteer not found"});
}

const createVolunteer = async (req, res) => {
  const { name, phone, interest } = req.body;
  let flag = false;

  const volunteers = await volunteerService.findAll();
  volunteers.map((v) => {
    if(v.name === name) {
      flag = true;
    }
  });

  if(flag === true) return res.status(400).send({message: "Volunteer with that name already exists"});
  else {
    const volunteer = await volunteerService.create(req.body)
    .catch((err) => res.status(400).send({message: err}));

    res.status(201).send({
      volunteer:{
        id: volunteer._id,
        name,
        phone,
        interest
      }
    })
  }
}

module.exports = { createVolunteer,findAll,findById,deleteById };