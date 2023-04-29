mongoose = require('mongoose')
const bcrypt =  require('bcrypt')
const Schema = mongoose.Schema

const doctorSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    areaOfExperties :{
        type:String,
        required:true
    }
},{timestamps : true});


const Doctor = mongoose.model('Doctor', doctorSchema)
module.exports = Doctor;