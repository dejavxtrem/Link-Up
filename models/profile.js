const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema ({
    firstName: {
        type: String,
        required: [ true, 'FIrst Name is required']
    },
    lastName : {
        type: String,
        required: [true, 'Last Name is required']
    },
    username: {
        type: String,
        required: [true, `Username required`]
    },
    password: {
        type: String,
        required: [true, `Username required`]
    },
    email: {
        type: String,
        required: [true, `email is required`]
    },
    CodeBootcamp: String,
    Country: {type: String, default: "United States"},
    City: String,
    State: String,
    zipcode: {
        type: Number,
        max: [5, `zipcode cant be more than 5`]
    }
})

const profile = mongoose.model('devprofileinfo', profileSchema);


module.exports = profile;