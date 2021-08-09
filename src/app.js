const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path');


const app = express()
app.use(cors());

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/challenge', require('./routes/challenge.routes'))

module.exports = app;