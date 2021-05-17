const mongoose = require('mongoose');

const PerfilesSchema = mongoose.Schema({
    idGit:String,
    avatar_url:  String,
    location:String,
    login:String,
    type:String

})

module.exports = mongoose.model('Perfiles',PerfilesSchema);