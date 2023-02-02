const volunteerService = require('../services/volunteer.service');

const findAll = async (req, res) => {
  try {
    const allVolunteers = await volunteerService.findAll();
    res.send(allVolunteers);
  }catch (err) { res.status(500).send({ message: err.message }) }
}

const findById = (req, res) => {
  try {
    const volunteer = req.volunteer;
    res.send(volunteer);
  } catch (err) { res.status(500).send({ message: err.message }) }
}

const update = async (req, res) => {
  try {
    const { name, phone, interest } = req.body;
    if (!name && !phone) return res.status(400).send({ message: 'Submit at least one field for update' });

    const id = req.id;

    await volunteerService.update(
      id,
      name,
      phone,
      interest
    );

    res.send({ message: 'Vounteer successfuly updated' });
  } catch (err) { res.status(500).send({ message: err.message }); }
}

const createVolunteer = async (req, res) => {
  try {
    const { name, phone, interest } = req.body;
    let flag = false;

    const volunteers = await volunteerService.findAll();
    volunteers.map((v) => {
      if (v.name === name) {
        flag = true;
      }
    });

    if (flag === true) return res.status(400).send({ message: "Volunteer with that name already exists" });
    else {
      const volunteer = await volunteerService.create(req.body)
        .catch((err) => res.status(400).send({ message: err }));

      res.status(201).send({
        volunteer: {
          id: volunteer._id,
          name,
          phone,
          interest
        }
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

module.exports = { createVolunteer, findAll, findById, update };