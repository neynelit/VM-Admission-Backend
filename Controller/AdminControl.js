const Admin = require('../Model/Admin')
const bcrypt = require('bcryptjs')


//get all admin data
exports.getAllAdmin = async(req, res) => {
    try {
        const getAllAdmin = await Admin.find()
        res.json(getAllAdmin)
    }
    catch(err){
        message: err
    }
}

//search admin
exports.searchAdmin = async(req, res) => {
    const username = req.body.username
    try {
        const data = await Admin.findOne({ username: username })
        res.json(data)
    }
    catch (err){
        message: err
    }
}

//search admin using any value
exports.searchAnyAdmin = async(req, res) => {
    const data = {
        field: req.body.field,
        value: req.body.value
    }
    try {
        const searchAnyAdmin = await Admin.findOne({ [data.field]: data.value })
        res.json(searchAnyAdmin)
    }
    catch (err){
        message: err
    }
}

//login admin
exports.loginAdmin = async(req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password
    }

    const admin = await Admin.findOne({ username: data.username })
    try {
        if(admin){
            bcrypt.compare(data.password, admin.password, function(err, isMatch){
                if(err) res.json('Invalid')
                else if(!isMatch) res.json('Invalid')
                else res.json('Valid')
            })
        }

        else res.json('Invalid')
    }
    catch (err){
        message: err
    }
}

//signup admin
exports.signupAdmin = async(req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        type: req.body.type,
        access: req.body.access,
        email: req.body.email,
        mobile: req.body.mobile
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const signupAdmin = new Admin({
        username: req.body.username,
        password: hashedPassword,
        name: req.body.name,
        type: req.body.type,
        access: req.body.access,
        email: req.body.email,
        mobile: req.body.mobile
    })

    try {
        const signupData = await signupAdmin.save()
        res.json(signupData)
    }
    catch(err){
        message: err
    }
}

//update an admin
exports.updateAdmin = async(req, res) => {

    const data = {
        username: req.body.username,
        name: req.body.name,
        type: req.body.type,
        access: req.body.access,
        email: req.body.email,
        mobile: req.body.mobile
    }
    try {
        const updateAdmin = await Admin.updateOne(
            { _id: req.params.postId },
            { $set: {
                username: data.username,
                name: data.name,
                type: data.type,
                access: data.access,
                email: data.email,
                mobile: data.mobile
            }}
        )
        res.json(updateAdmin)
    }
    catch (err){
        message: err
    }
}

//update admin password
exports.updateAdminPassword = async(req, res) => {

    const password = req.body.password

    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        const updateAdmin = await Admin.updateOne(
            { _id: req.params.postId },
            { $set: {
                password: hashedPassword
            }}
        )
        res.json(updateAdmin)
    }
    catch (err){
        message: err
    }
}

//delete an admin
exports.deleteAdmin = async(req, res) => {
    try {
        const data = await Admin.deleteOne({ _id: req.params.postId })
        res.json(data)
    }
    catch (err){
        message: err
    }
}