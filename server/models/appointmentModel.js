mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    doctor:{
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required : true
    },
    patient:{
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required : true
    },
    date:{
        type: Date,
        required: true
    },
    reason :{
        type: String,
        required: true
    },
    state:{
        type:String,
        default:"Active"
    }
},{timestamps : true})

const Appointment = mongoose.model('Appointment', appointmentSchema)
module.exports = Appointment