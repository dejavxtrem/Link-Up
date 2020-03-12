const express = require('express')
const pageRouter = express.Router()
const Profile = require('../models/profile.js')




pageRouter.get('/page', (req, res) => {
    if (req.session.currentUser) {
        Profile.findById(req.session.currentUser._id, (err, foundUser) => {
            res.render('profilepage/profilehomepage.ejs' , {
                currentUser: foundUser
            })
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
//EDIT
pageRouter.put('/:id', (req, res) => {
    Profile.findByIdAndUpdate(
        req.params.id, 
        req.body,
         {new : true}, 
         (err, product) => {
            if (err) {console.log(err) } 
            //console.log(product)
            res.redirect('/profilepage/page')
         }
    )
})
//delete
pageRouter.delete('/:id', (req, res) => { 
    //console.log(ID)
    Profile.findByIdAndRemove(req.session.currentUser._id, (err, loginUser) => {
       //loginUser = req.session.currentUser._id
        if (err) {console.log(err)}
        res.redirect('/devusers')
    })
})


  module.exports = pageRouter