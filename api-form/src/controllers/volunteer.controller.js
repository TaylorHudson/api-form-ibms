const createVolunteer = (req, res) => {
  const { name, phone, interest } = req.body;
  if(!name || !phone || !interest) {
    res.status(400).send({message: "Submit all fields for creation"});
  }

  res.status(201).send({
    volunteer:{
      name,phone,interest
    }
  })
}

module.exports = { createVolunteer };