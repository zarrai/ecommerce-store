const express = require('express');
const app = express();
const connectDB = require('./database/db');

connectDB();




const port = process.env.Port || 5000;

app.listen(port, () => console.log(`lisining on port ${5000}`))