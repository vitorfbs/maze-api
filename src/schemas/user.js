const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: Number
    }
},{ collection: 'users' })

module.exports = mongoose.model('User', dataSchema)