// start of back en

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = 5000;

// connect to mongoose
mongoose
  .connect(process.env.MONGO_CONNECT_STRING, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('connected to mongoose server');
  })
  .catch((err) => console.error(err.message));

// middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json(`Serveris veikia an port ${PORT}`);
});

// routes

const formRoutes = require('./routes/formRoutes');
app.use('/', formRoutes);

// server listen
app.listen(PORT, console.log(`Server works on port ${PORT}`));
