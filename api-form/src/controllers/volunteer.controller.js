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

const update = async (req,res) => {
  const {name, phone, interest } = req.body;
  if(!name && !phone) return res.status(400).send({message: 'Submit at least one field for update'});

  const id = req.params.id;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({message: 'Invalid ID'});
  
  const user = volunteerService.findById(id);
  if(!user) return res.status(400).send({message: 'Volunteer not found'});

  await volunteerService.update(
    id,
    name,
    phone,
    interest
  );

  res.send({message: 'Vounteer successfuly updated'})
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

module.exports = { createVolunteer,findAll,findById,update };