const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const jobsSchema = new Schema({
    jobName:{type :String,required:true},
    jobDescription:{type:String},
    jobRequirements:{type:String},
    jobType:{type:String,required:true},
    jobAppliedCount:{type:Number},
    jobPostedDate:{type:Date,default:Date.now},
    jobApplicantsId:{type:Schema.Types.ObjectId,ref:'candidateData'},
    companyIndustry:{type:String},
    companyDescription:{type:String},
    jobMode:{type:String,required:true},
    jobLocation:{type:String},
    vacancyCount:{type:Number,required:true},
    salary:{type:Number},
    salaryType:{type:String,enum:['per_month','per_annum']}

})
module.exports = mongoose.model('jobs',jobsSchema);
