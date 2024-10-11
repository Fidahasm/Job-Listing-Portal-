const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const jobsSchema = new Schema({
    jobName:{type :String,required:true},
    jobType:{type:String,required:true},
    jobAppliedCount:{type:Number,required:true},
    jobPostedDate:{type:Date,required:true},
    jobApplicantsId:{type:Number,required:true}

})
module.exports = mongoose.model('jobs',jobsSchema);
