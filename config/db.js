const mongoose = require('mongoose');
const mogoURI = "mongodb://localhost:27017/NoteBook"

const ConnetToMongo = () =>{
    mongoose
    .connect(mogoURI)
    .then(()=> console.log("Conneted to the databse"))
    .catch(err=> console.log(err));
}


module.exports = ConnetToMongo;