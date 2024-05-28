const Questions = require('../Model/Questions')
const { GridFsStorage } = require('multer-gridfs-storage');
const path = require('path');
const multer = require('multer');
const crypto = require('crypto');

const MONGODB_URL = process.env.MONGODB_URL

const storage = new GridFsStorage({
    url: MONGODB_URL,
    file: (req, res) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if(err) return reject(err)

                const filename = buf.toString('hex') + path.extname(file.originalname)
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                }
                resolve(fileInfo)
            })
        })
    }
})

const upload = multer({ storage })

//get all questions
exports.getAllQuestions = async(req, res) => {
    try {
        const getAllQuestions = await Questions.find().toArray()
        const fileList = files.map((file) => ({
            _id: file._id,
            title: file.title,
            course: file.course,
            session: file.session,
            semester: file.semester,
            filename: file.filename,
            fileId: file.fileId,
            size: file.length,
            status: file.status
        }))
        res.json(fileList)
    }
    catch (err){
        message: err
    }
}

//add a question
exports.addQuestion = upload.single('file'), async(req, res) => {
    const fileId = req.file.id
    const filepath = req.file.filename

    const data = new Questions({
        title: req.body.title,
        course: req.body.course,
        session: req.body.session,
        semester: req.body.semester,
        filename: req.file.filename,
        fileId: fileId,
        filepath: `./images/${filepath}`,
        filetype: req.file.contentType,
        size: req.file.size,
        status: req.body.status
    })
    try {
        const saveQuestion = await data.save()
        res.json(saveQuestion)
    }
    catch (err){
        message: err
    }
}


//update a question
exports.updateQuestion = async(req, res) => {
    try {
        const data = await Questions.updateOne(
            { _id: req.params.potsId},
            { $set: {
                title: req.body.title,
                course: req.body.course,
                session: req.body.session,
                semester: req.body.semester,
                file: req.file,
                status: req.body.status
            }}
        )
        res.json(data)
    }
    catch (err){
        message: err
    }
}


//delete a question
exports.deleteQuestion = async(req, res) => {
    try {
        const data = await Questions.deleteOne({ _id: req.params.postId })
        res.json(data)
    }
    catch (err){
        message: err
    }
}