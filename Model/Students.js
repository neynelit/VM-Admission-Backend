const mongoose = require('mongoose')

const Students = new mongoose.Schema({
    name: { type: String },
    father_name: { type: String },
    father_occupation: { type: String },
    father_mobile: { type: String },
    mother_name: { type: String },
    mother_occupation: { type: String },
    mother_mobile: { type: String },
    registration_no: { type: Number },
    course: { type: String },
    year: { type: String },
    roll: { type: String },
    amount: { type: Number },
    mobile: { type: Number },
    mobile_2: { type: Number },
    transaction_id: { type: String },
    date: { type: Date },
    dob: { type: Date },
    email: { type: String },
    country: { type: String },
    blood_group: {
        type: String,
        default: 'N/A'
    },
    aadhar: { type: String },
    gender: { type: String },
    category: {
        type: String,
        default: 'General'
    },
    martial_status: {
        type: String,
        default: 'Single'
    },
    religion: {
        type: String,
        default: 'Not to be Disclosed'
    },
    annual_income: { type: String },
    disability: { type: String },
    street_name: { type: String },
    street_name_2: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    hs_board: { type: String },
    hs_stream: { type: String },
    hs_year: { type: String },
    hs_reg_no: { type: String },
    hs_roll_no: { type: String },
    hs_marks: { type: String },
    session: { type: String },
    admission_status: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Students', Students)