const express = require('express');
const volunteerRoute = require('./src/routes/volunteer.route');
const connectDatabase = require('./src/database/db');
const port = 3000;

const app = express();

connectDatabase();
app.use(express.json());

app.use('/volunteer', volunteerRoute);

app.listen(port, () => console.log('Server is running'));