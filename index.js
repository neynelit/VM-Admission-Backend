const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8080
const cors = require('cors')
app.use(cors())

const Routes = require('./Routes/Routes')
app.use(bodyParser.json())
app.use('/', Routes)

app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('index'))
app.use('/images', express.static('uploads'));

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Database is live...!')
    })

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})