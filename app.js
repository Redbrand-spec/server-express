const express = require('express')
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const App = express({dev})
const Path = require('path')

const Router = require('./route')
/////////////////////////////////////////////////////
App.use(require('morgan')('dev'))
App.use(bodyParser.urlencoded({ extended: true }))
App.use(bodyParser.json())
App.use(require('cors')())
App.use(express.static('public'))
/////////////////////////////////////////////////////
App.use('/api', Router )

App.get('/', (req, res) => {
  res.status(200)
  res.sendFile(path.join(__dirname, 'public', 'index.html' ))
})


module.exports = App