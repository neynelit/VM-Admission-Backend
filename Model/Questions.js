const mongoose = require('mongoose')

const Questions = new mongoose.Schema({
    title: { type: String },
    course: { type: String },
    session: { type: String },
    semester: { type: String },
    filename: { type: String },
    fileId: { type: mongoose.Schema.ObjectId },
    filepath: { type: String },
    filetype: { type: String },
    size: { type: Number },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    status: { type: String }
})

module.exports = mongoose.model('Questions', Questions)