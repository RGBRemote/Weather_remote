const mongoose = require('mongoose')
const Schema = mongoose.Schema({
    temp: {
        type: Number,
    },
    humidity: {
        type: Number,
    },
    id:{
        type: String,
        default: "AnubhavRathore"
    },
    statusSensor: {
        type: String,
        default: "Active"
    }
})

module.exports = mongoose.model('apiModel', Schema)