const express = require('express');
const app = express()
// const passport = require('passport');
// const session = require('express-session');
const connectMongoDB = require('./config/database');
// morgan logs HTTP requests in console for more information 
const logger = require('morgan')
// const flash = require('express-flash')
const PORT = process.env.PORT || 5000
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')


require('dotenv').config({ path: './config/.env' });

connectMongoDB();

// middleware 
app.use(express.json()); // NEED for PUT/POST requests 
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});