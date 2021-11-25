const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    mail: {
        type: String,
        required: true
    // },
    // contact: {
    //     type: Number,
    //     required: true,
    //     default: false

    }
})
const User = mongoose.Model('User', UserSchema);

module.exports = {User};