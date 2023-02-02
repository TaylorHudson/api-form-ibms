const route = require('express').Router();
const volunteerController = require('../controllers/volunteer.controller')

route.post('/create', volunteerController.createVolunteer);
route.get('/', volunteerController.findAll);
route.get('/:id', volunteerController.findById);
route.patch('/update/:id', volunteerController.update);

module.exports = route;