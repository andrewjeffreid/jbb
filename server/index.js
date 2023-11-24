const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth.js');
const goalsRoute = require('./routes/goals.js');
const cors = require('cors');

dotenv.config();
const app = express();
mongoose.connect(process.env.DSN);

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/goals', goalsRoute);

app.listen(process.env.PORT);
