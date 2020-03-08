const express = require('express')
const devUser = express.Router()
const profile = require('../models/profile.js')

devUser.get('/', (req, res) => {
  res.render('index.ejs');
})



devUser.get('/new', (req, res) => {
  res.render('users/newuserprofile.ejs')
})



devUser.post('/', (req, res) => {
  profile.create(req.body, (err, profileUser) => {
      if (err) {
        res.send(err)
      }
      console.log(profileUser)
      res.redirect('/pricing/price')
  })
})

module.exports = devUser;