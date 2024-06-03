const Subjects = require('../Model/Subjects')

//get all subjects
exports.getAllSubjects = async(req, res) => {
    try {
        const getAllSubjects = await Subjects.find()
        res.json(getAllSubjects)
    }
    catch (err){
        message: err
    }
}

//find a subject by subject and courseType
exports.findSubject = async(req, res) => {
    const data = {
        subject: req.body.subject,
        courseType: req.body.courseType
    }
    try {
        const findSubject = await Subjects.findOne({ subject: data.subject, courseType: data.courseType })
        res.json(findSubject)
    }
    catch (err){
        message: err
    }
}

//save a subject
exports.saveSubject = async(req, res) => {
    const data = new Subjects({
        subject: req.body.subject,
        courseType: req.body.courseType,
        amount: req.body.amount
    })
    try {
        const saveSubject = await data.save()
        res.json(saveSubject)
    }
    catch (err){
        message: err
    }
}

//update a subject
exports.updateSubject = async(req, res) => {
    try {
        const data = await Subjects.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    subject: req.body.subject,
                    courseType: req.body.courseType,
                    amount: req.body.amount
                }
            }
        )
        res.json(data)
    }
    catch (err){
        message: err
    }
}


//delete a subject from database
exports.deleteSubject = async(req, res) => {
    try {
        const data = await Subjects.deleteOne({ _id: req.params.postId })
        res.json(data)
    }
    catch (err){
        message: err
    }
}




// = async(req, res) => {
//     try {
        
//     }
//     catch (err){
//         message: err
//     }
// }