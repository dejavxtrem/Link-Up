const express = require('express')
const pricing = express.Router()
const profile = require('../models/profile.js')

pricing.get('/price', (req, res) => {
  res.render('pricing/pricing.ejs');
  })

  


  module.exports = pricing