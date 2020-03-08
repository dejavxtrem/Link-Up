const express = require('express')
const pageRouter = express.Router()
const profile = require('../models/profile.js')

pageRouter.get('/page', (req, res) => {
    res.render('profilepage/profilehomepage.ejs')
  })

  module.exports = pageRouter