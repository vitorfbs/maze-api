const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    rating: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String
    }
},{ collection: 'occurrences' })

module.exports = mongoose.model('Occurrence', dataSchema)