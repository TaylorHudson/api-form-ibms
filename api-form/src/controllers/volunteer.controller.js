const volunteerService = require('../services/volunteer.service')

const createVolunteer = async (req, res) => {
  const { name, phone, interest } = req.body;
  if(!name || !phone || !interest) {
    res.status(400).send({message: "Submit all fields for creation"});
  }

  const volunteer = await volunteerService.create(req.body)
  .catch((err) => res.status(400).send({message: "Volunteer with that name already exists"}));

  if(!volunteer) {
    return res.status(400).send({message: "Error creating volunteer"})
  }

  res.status(201).send({
    volunteer:{
      id: volunteer._id,
      name,
      phone,
      interest
    }
  })
}

module.exports = { createVolunteer };