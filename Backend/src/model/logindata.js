const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.rlm8x.mongodb.net/lib?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
   username : String,
    password : String
    
});

var userData = mongoose.model('logindata', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports = userData;