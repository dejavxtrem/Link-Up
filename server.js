const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const morgan = require("morgan");
const  errorHandler = require("errorhandler");
require('dotenv').config()
const app = express()

//.emv config
const PORT = process.env.PORT
//const mongoURI = process.env.MONGO_URI

//se middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"))
app.use(errorHandler());
app.use (express.static("public"))
//app.use(express.static(__dirname + '/node_modules/bootstrap/dist/js'));

//bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/scss', express.static(__dirname + '/node_modules/bootstrap/scss'));;


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
     res.render('index.ejs')
});

app.get('/newprofile', (req, res) => {
  res.render('./users/newuserprofile.ejs')
})


///views












app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
