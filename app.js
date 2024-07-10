// Libraries
const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Routes
const weatherRoute = require('./routes/weather')

// Using routes
app.use('/weather', weatherRoute)

// Connecting DB
if(mongoose.connect('mongodb+srv://remotergb8:' + 'e7ChYYd6kYshkXWa' + '@remotergb.lbgzdlv.mongodb.net/?retryWrites=true&w=majority&appName=RemoteRGB')){
    console.log("Connected to DB");
    // console.log(PORT)
}

// Listening
app.listen(port)
