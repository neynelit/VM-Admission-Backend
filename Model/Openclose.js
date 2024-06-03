const mongoose = require('mongoose')

const Openclose = new mongoose.Schema({
    type: {
        type: String,
        default: 'Admission'
    },
    programme: {
        type: String,
        default: 'UG'
    },
    semester: { type: String },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Openclose', Openclose)