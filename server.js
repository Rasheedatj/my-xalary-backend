const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
const configDB = require('./config/db');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

configDB();
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to notchHR API' });
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
  })
);

const jobsRouter = require('./Routes/jobs');
const applicationsRouter = require('./Routes/applications');
const offersRouter = require('./Routes/offers');

app.use('/api/jobs', jobsRouter);
app.use('/api/applications', applicationsRouter);
app.use('/api/offers', offersRouter);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
