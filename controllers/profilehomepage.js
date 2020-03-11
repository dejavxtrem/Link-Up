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

// pageRouter.get('/:id/edit', (req, res) => {
//     profile.findById(req.params.id, (err, foundUser) => {
//         console.log(foundUser)
//         res.render('profilepage/profilehomepage.ejs', {
//             currentUser: foundUser
//         })
//     })
// });

pageRouter.put('/:_id', (req, res) => {
    profile.findByIdAndUpdate(
        req.params.id, 
        req.body,
         {new : true}, 
         (err, product) => {
        if (err) {console.log(err) } 
        res.render('profilepage/profilehomepage.ejs', {
            currentUser: req.session.currentUser
        })
    })
})



  module.exports = pageRouter