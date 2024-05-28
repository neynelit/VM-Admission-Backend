const Students = require('../Model/Students')

//get all students data
exports.getAllStudents = async(req, res) => {
    const data = {
        limitValue: req.params.limitValue,
        skipValue: req.params.skipValue
    }
    try {
        const getAllStudents = await Students.find().limit(data.limitValue).skip(data.skipValue)
        res.json(getAllStudents)
    }
    catch (err){
        message: err
    }
}

exports.checkSingleStudent = async(req, res) => {
    const data = {
        name: req.body.name,
        mobile: req.body.mobile
    }
    try {
        const checkSingleStudent = await Students.findOne(data)
        res.json(checkSingleStudent)
    }
    catch (err){
        message: err
    }
}

//find using any field
exports.findStudent = async(req, res) => {
    const data = {
        field: req.body.field,
        value: req.body.value,
        limitValue: req.body.limitValue,
        skipValue: req.body.skipValue
    }
    try {
        const findStudent = await Students.find({ [data.field]: data.value }).limit(data.limitValue).skip(data.skipValue)
        res.json(findStudent)
    }
    catch (err){
        message: err
    }
}


//get a single student data
exports.getSingleStudent = async(req, res) => {
    const data = {
        registration_no: req.body.registration_no,
        course: req.body.course
    }
    try {
        const getSingleStudent = await Students.find(data)
        res.json(getSingleStudent)
    }
    catch (err){
        message: err
    }
}


//get a single student data using registration number
exports.getSingleRegStudent = async(req, res) => {
    try {
        const getSingleRegStudent = await Students.findOne({registration_no: req.params.registration_no})
        res.json(getSingleRegStudent)
    }
    catch (err){
        message: err
    }
}

//add a student data
exports.addStudent = async(req, res) => {
    const data = new Students({
        name: req.body.name,
        father_name: req.body.father_name,
        father_occupation: req.body.father_occupation,
        father_mobile: req.body.father_mobile,
        mother_name: req.body.mother_name,
        mother_occupation: req.body.mother_occupation,
        mother_mobile: req.body.mother_mobile,
        registration_no: req.body.registration_no,
        course: req.body.course,
        year: req.body.year,
        roll: req.body.roll,
        amount: req.body.amount,
        mobile: req.body.mobile,
        mobile_2: req.body.mobile_2,
        transaction_id: req.body.transaction_id,
        date: req.body.date,
        dob: req.body.dob,
        email: req.body.email,
        country: req.body.country,
        blood_group: req.body.blood_group,
        aadhar: req.body.aadhar,
        category: req.body.category,
        martial_status: req.body.martial_status,
        religion: req.body.religion,
        annual_income: req.body.annual_income,
        disability: req.body.disability,
        street_name: req.body.street_name,
        street_name_2: req.body.street_name_2,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        hs_board: req.body.hs_board,
        hs_stream: req.body.hs_stream,
        hs_year: req.body.hs_year,
        hs_reg_no: req.body.hs_reg_no,
        hs_roll_no: req.body.hs_roll_no,
        hs_marks: req.body.hs_marks,
        gender: req.body.gender,
        session: req.body.session,
        admission_status: req.body.admission_status
    })
    try {
        const addStudent = await data.save()
        res.json(addStudent)
    }
    catch (err){
        message: err
    }
}

//add multiple students data
exports.addMultipleStudents = async(req, res) => {
    const data = req.body.data
    const options = { ordered: true }
    try {
        const addMultipleStudents = await Students.insertMany(data, {ordered: false})
        res.json(addMultipleStudents);
        //res.json(data)
    }
    catch(err){
        message: err
    }
}


//update a student data
exports.updateStudent = async(req, res) => {
    try {
        const data = await Students.updateOne(
            { _id: req.params.postId},
            {
                $set: {
                    name: req.body.name,
                    father_name: req.body.father_name,
                    father_occupation: req.body.father_occupation,
                    father_mobile: req.body.father_mobile,
                    mother_name: req.body.mother_name,
                    mother_occupation: req.body.mother_occupation,
                    mother_mobile: req.body.mother_mobile,
                    registration_no: req.body.registration_no,
                    course: req.body.course,
                    year: req.body.year,
                    roll: req.body.roll,
                    amount: req.body.amount,
                    mobile: req.body.mobile,
                    mobile_2: req.body.mobile_2,
                    transaction_id: req.body.transaction_id,
                    date: req.body.date,
                    dob: req.body.dob,
                    email: req.body.email,
                    country: req.body.country,
                    blood_group: req.body.blood_group,
                    aadhar: req.body.aadhar,
                    category: req.body.category,
                    martial_status: req.body.martial_status,
                    religion: req.body.religion,
                    annual_income: req.body.annual_income,
                    disability: req.body.disability,
                    street_name: req.body.street_name,
                    street_name_2: req.body.street_name_2,
                    city: req.body.city,
                    state: req.body.state,
                    pincode: req.body.pincode,
                    hs_board: req.body.hs_board,
                    hs_stream: req.body.hs_stream,
                    hs_year: req.body.hs_year,
                    hs_reg_no: req.body.hs_reg_no,
                    hs_roll_no: req.body.hs_roll_no,
                    hs_marks: req.body.hs_marks,
                    gender: req.body.gender,
                    session: req.body.session,
                    admission_status: req.body.admission_status
                }
            }
        )
        res.json(data)
    }
    catch (err){
        message: err
    }
}


//delete a student data
exports.deleteStudent = async(req, res) => {
    try {
        const data = await Students.deleteOne({ _id: req.params.postId})
        res.json(data)
    }
    catch (err){
        message: err
    }
}




// name: req.body.name,
// registration_no: req.body.registration_no,
// father_name: req.body.father_name,
// course: req.body.course,
// year: req.body.year,
// roll: req.body.roll,
// amount: req.body.amount,
// mobile: req.body.mobile,
// transaction_id: req.body.transaction_id,
// date: req.body.date

// {
//     "name": "",
//     "father_name": "",
//     "registration_no": "",
//     "course": "",
//     "year": "",
//     "roll": "",
//     "amount": "",
//     "mobile": "",
//     "transaction_id": "",
//     "date": ""
// }