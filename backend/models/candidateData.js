const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    candidateName:{type:String,required:true},
    appliedJobCount:{type:String,required:true},
    appliedJobId:{type:String,required:true}
});

module.exports = mongoose.model('candidateData',candidateSchema);