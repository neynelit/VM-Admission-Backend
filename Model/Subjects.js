const mongoose = require('mongoose')

const Subjects = new mongoose.Schema({
    subject: { type: String },
    courseType: {
        type: String,
        default: 'UG'
    },
    amount: {
        type: Number,
        default: 0
    },
    capacity: {
        type: Number,
        default: 0
    },
    semester: { type: String },
    admission_status: {
        type: Boolean,
        default: false
    }
    
})

module.exports = mongoose.model('Subjects', Subjects)