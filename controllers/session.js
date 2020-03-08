const express = require('express')
const sessions = express.Router()
const profile = require('../models/users.js')

sessions.get('/new', (req, res) => {
    res.render('sessions/profilelogin.ejs')
  })

sessions.post('/', (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if (req.body.password == foundUser.password) {
            req.sessions.currentUser = foundUser
            res.redirect('/')
        } else {
            res.send('<a href="/">wrong password</a>')
        }
    })
})





  module.exports = sessions