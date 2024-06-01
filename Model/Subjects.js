const mongoose = require('mongoose')

const Amounts = new mongoose.Schema({
    semester: {
        type: String,
        default: 'Semester 1'
    },
    bc_i: {
        type: Number,
        default: 0
    },
    sc: {
        type: Number,
        default: 0
    },
    st: {
        type: Number,
        default: 0
    },
    girl: {
        type: Number,
        default: 0
    },
    general: {
        type: Number,
        default: 0
    },
    all_student: {
        type: Number,
        default: 0
    },
    admission_status: {
        type: Boolean,
        default: false
    },
    capacity: {
        type: Number,
        default: 0
    }
})

const Subjects = new mongoose.Schema({
    subject: { type: String },
    courseType: {
        type: String,
        default: 'UG'
    },
    amount: [Amounts]
    
})

module.exports = mongoose.model('Subjects', Subjects)