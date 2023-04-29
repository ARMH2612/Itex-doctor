mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    prescriptions : [{
        medication:{
            type: String,
            required: true
        },
        dosage:{
            type: Number,
            required: true
        },
        frequency:{
            type: Number,
            required: true
        },
        startDate:{
            type: Date,
            required: true
        },
        endDate:{
            type: Date,
            required: true
        }
    }],
    medicationHistory :[{
        diagnosis:{
            type: Date,
            required: true
        },
        treatment:{
            type: Date,
            required: true
        },
        note:{
            type: Date,
            default : "No note"
        }
    }]
},{timestamps : true})
const Patient = mongoose.model('Patient', patientSchema)
module.exports = Patient