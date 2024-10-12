const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const employerSchema = new Schema({
    name:{type :String,required:true},
    companyName:{type:String,required:true},
    noOfEmployees:{type:Number},
    phoneNo:{type:Number,required:true},
    postedJobs:{type:Schema.Types.ObjectId,ref:'jobs'}

})
module.exports = mongoose.model('employerData',employerSchema);
