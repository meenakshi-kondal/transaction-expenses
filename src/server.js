const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/transactionRoute.js');

const app = express();

// call database
connectDB();

// added middplewear
app.use(cors());
app.use(bodyParser.json());

// initialize api
app.use('/api',router );

const PORT = process.env.PORT || 5000;

// Port listen
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));