const express = require('express')
const searchRouter = express.Router()
const Profile = require('../models/profile.js')


searchRouter.get('/', (req, res) => {
    Profile.find({name: req.body.zip}, (err, zipresult) => {
        if (err) {console.log(err)} 
            //console.log(zipresult)
            res.render('searchresult/result.ejs', {
                    zipresult: zipresult
            })

    })




    
})




module.exports = searchRouter