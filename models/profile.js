const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema ({
    firstname: {
        type: String,
        required: [ true, 'FIrst Name is required']
    },
    lastname : {
        type: String,
        required: [true, 'Last Name is required']
    },
    username: {
        type: String,
        required: [true, `username required`]
    },
    password: {
        type: String,
        required: [true, `password required`]
    },
    email: {
        type: String,
        required: [true, `email is required`]
    },
    codebootcamp: String,
    location: String,
    country: {type: String, default: "United States"},
    city: String,
    state: String,
    programinglanguage: [String],
    zipcode: {
        type: Number
    }
}, {timestamps: true})

const profile = mongoose.model('devprofileinfo', profileSchema);


module.exports = profile;