const express = require('express');
const app = express()
// const mongoose = require('mongoose');
// const passport = require('passport');
// const session = require('express-session');
// const connectDB = require('./config/database')
const PORT = process.env.PORT || 5000


require('dotenv').config({ path: './config/.env' });

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});