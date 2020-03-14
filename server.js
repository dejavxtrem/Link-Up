const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const morgan = require("morgan");
const  errorHandler = require("errorhandler");
const session = require('express-session')
require('dotenv').config()
const app = express()



//.emv config
const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI


//Router 
const devUser = require('./controllers/devUser.js')
const sessionsController = require('./controllers/sessions.js')
const pricingController = require('./controllers/pricing.js')
const pageRoute = require('./controllers/profilehomepage.js')
const search = require('./controllers/searchresult.js')


app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

//se middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"))
app.use(errorHandler());
app.use (express.static("public"))
app.use('/devusers', devUser)
app.use('/sessions', sessionsController)
app.use('/pricing', pricingController)
app.use('/profilepage', pageRoute)
app.use('/search', search)


//bootstrap



//database connection
mongoose.connect( mongoURI , {
    useNewUrlParser: true ,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})







////////////////////////////////////////////////////////////////////////////
//ROUTE
app.get('/', (req, res) => {
     res.redirect('/devusers')
});




///views












app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
