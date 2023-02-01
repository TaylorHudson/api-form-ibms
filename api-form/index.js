const express = require('express');
const volunteerRoute = require('./src/routes/volunteer.route');
const connectDatabase = require('./src/database/db');
const cors = require('cors')
const port = 3000;

const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());

app.use('/volunteer', volunteerRoute);

app.listen(port, () => console.log('Server is running'));