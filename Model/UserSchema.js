const mongoose = require('mongoose');

const UserSchema = new Schema({
    name :{
        types : String,
        required: true
    },
    email :{
        types : String,
        required: true,
        unique: true
    },
    password :{
        types : String,
        required: true
    },
    date :{
        types : Date,
        default:Date.now
    }, 
})


module.exports = mongoose.model('user', UserSchema);