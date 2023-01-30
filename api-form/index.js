const express = require('express');
const volunteerRoute = require('./src/routes/volunteer.route');
const port = 3000;

const app = express();
app.use(express.json());

app.use('/volunteer', volunteerRoute);

app.listen(port, () => console.log('Server is running'));