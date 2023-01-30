const route = require('express').Router();
const volunteerController = require('../controllers/volunteer.controller')

route.post('/create', volunteerController.createVolunteer);

module.exports = route;