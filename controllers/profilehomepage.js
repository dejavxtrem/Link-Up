const express = require('express')
const pageRouter = express.Router()
const profile = require('../models/profile.js')

pageRouter.get('/page', (req, res) => {
    if (req.session.currentUser) {
        res.render('profilepage/profilehomepage.ejs' , {
            currentUser: req.session.currentUser
        })
    } else {
        res.redirect('/devusers/new')
    }

  })

  module.exports = pageRouter