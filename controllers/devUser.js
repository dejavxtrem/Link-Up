const express = require('express')
const devUser = express.Router()
const profile = require('../models/profile.js')
const bcrypt = require('bcrypt')




devUser.get('/', (req, res) => {
  res.render('index.ejs');
})



devUser.get('/new', (req, res) => {
  res.render('users/newuserprofile.ejs')
})



devUser.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)) 
  profile.create(req.body, (err, profileUser) => {
      if (err) {
        res.send(err)
      }
      console.log(profileUser)
      res.redirect('/sessions/new')
  })



})

module.exports = devUser;