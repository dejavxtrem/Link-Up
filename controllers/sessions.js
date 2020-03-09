const express = require('express')
const sessions = express.Router()
//const User = require('../models/users.js')
const profile = require('../models/profile.js')

sessions.get('/new', (req, res) => {
    res.render('sessions/profilelogin.ejs')
  })

sessions.post('/', (req, res) => {
    profile.findOne({username: req.body.username}, (err, foundUser) => {
        if (req.body.password == foundUser.password) {
            //console.log(req.body)
            //const credentials = {username: foundUser.username, password: foundUser.password}
            req.session.currentUser = foundUser
            res.redirect('/profilepage/page')
        } else {
            res.redirect('/devusers/new')
        }
    })
})





  module.exports = sessions