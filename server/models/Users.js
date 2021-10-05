const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter a email address']
    },
    firstName: {
        type: String,
        required: [true, 'Please enter a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a last name']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    userType: {
        type: Boolean,
        required: [true, 'Please enter a user type']
    },
    products: {
        type: String,
        required: false,
        default: 'none'
    }
});

module.exports = mongoose.model('User', UserSchema);