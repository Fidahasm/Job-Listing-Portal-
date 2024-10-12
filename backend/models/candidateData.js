const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const candidateSchema = new Schema({
    candidateName:{type:String,required:true},
    appliedJobCount:{type:String},
    appliedJobId:{type:String},
    phoneNo:{type:Number},
    country:{type:String},
    city:{type:String},
    education:[{
        institute:{type:String},
        degree:{type:String},
        fieldOfStudy:{type:String}
    }],
    skills:[String]

});

module.exports = mongoose.model('candidateData',candidateSchema);