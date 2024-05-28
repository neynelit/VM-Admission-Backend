const Openclose = require('../Model/Openclose')
const Subjects = require('../Model/Subjects')

//get all openclose
exports.getAllOpenclose = async(req, res) => {
    try {
        const getAllOpenclose = await Openclose.find()
        res.json(getAllOpenclose)
    }
    catch (err){
        message: err
    }
}

//add a open close
exports.saveOpenclose = async(req, res) => {
    const data = new Openclose({
        type: req.body.type,
        programme: req.body.programme,
        semester: req.body.semester,
        status: req.body.status,
        date: req.body.date
    })
    try {
        const saveOpenclose = await data.save()
        res.json(saveOpenclose)
    }
    catch (err){
        message: err
    }
}

//update a openclose
exports.updateOpenclose = async(req, res) => {
    try {
        const updateOpenclose = await Openclose.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    type: req.body.type,
                    programme: req.body.programme,
                    semester: req.body.semester,
                    status: req.body.status,
                    date: req.body.date
                }
            }
        )

        res.json(updateOpenclose)
    }
    catch (err){
        message: err
    }
}



//delete a open close
exports.deleteOpenclose = async(req, res) => {
    try {
        const data = await Openclose.deleteOne({ _id: req.params.postId })
        res.json(data)
    }
    catch (err){
        message: err
    }
}