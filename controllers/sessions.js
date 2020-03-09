const express = require('express')
const sessions = express.Router()
//const User = require('../models/users.js')
const profile = require('../models/profile.js')
const bcrypt = require('bcrypt')


sessions.get('/new', (req, res) => {
    res.render('sessions/profilelogin.ejs')
  })

sessions.post('/', (req, res) => {
    profile.findOne({username: req.body.username}, (err, foundUser) => {
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            //console.log(req.body)
            //const credentials = {username: foundUser.username, password: foundUser.password}
            req.session.currentUser = foundUser
            //check if user is loged in or not with profilehomepage
            res.redirect('/profilepage/page')
        } else {
            res.redirect('/devusers/new')
        }
    })
})

sessions.delete('/', (req, res)=>{
    req.session.destroy(() => {
        res.redirect('/devusers/')
    })
})



  module.exports = sessions