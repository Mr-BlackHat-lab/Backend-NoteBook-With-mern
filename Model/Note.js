const mongoose = require('mongoose');

const NoteSchema = new Schema({
    titel :{
        types : String,
        required: true,
        unique: true
    },
    discription :{
        types : String,
        required: true
    },
    tags :{
        types : String,
        default : "Genral"
    },
    date :{
        types : Date,
        default:Date.now
    }, 
})


module.exports = mongoose.model('note', NoteSchema);