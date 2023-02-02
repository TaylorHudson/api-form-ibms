const route = require('express').Router();
const volunteerController = require('../controllers/volunteer.controller');
const { validId, validUser } = require('../middlewares/global.middlewares');

route.post('/create', volunteerController.createVolunteer);
route.get('/', volunteerController.findAll);
route.get('/:id',validId,validUser, volunteerController.findById);
route.patch('/update/:id',validId, validUser, volunteerController.update);

module.exports = route;