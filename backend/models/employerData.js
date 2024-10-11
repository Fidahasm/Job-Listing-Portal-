const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const employerSchema = new Schema({
    name:{type :String,required:true},
    companyName:{type:String,required:true}

})
module.exports = mongoose.model('employerData',employerSchema);
