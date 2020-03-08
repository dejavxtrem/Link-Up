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
//const mongoURI = process.env.MONGO_URI


//Router 
const devUser = require('./controllers/devUser.js')
const sessionsController = require('./controllers/sessions.js')
const pricingController = require('./controllers/pricing.js')
const pageRoute = require('./controllers/profilehomepage.js')

//se middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"))
app.use(errorHandler());
app.use (express.static("public"))
app.use('/devusers', devUser)
app.use('/sessions', sessionsController)
app.use('/pricing', pricingController)
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use('/profilepage', pageRoute)
//bootstrap



//database connection
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds145178.mlab.com:45178/devmeetprofile`, {
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
