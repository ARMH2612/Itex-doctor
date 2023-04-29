const Appointment = require('../models/appointmentModel')
const mongoose = require('mongoose')

const getAppointments_doctor = async (req, res) => {
    try {
        const {id} = req.params
        const appointments = await Appointment.find({
            doctor: id
        })
        res.status(200).json(appointments)
    }catch(error) {
        console.log(error);
        res.status(500).send("Server error");
    }
}
const getAppointments_patient = async (req, res) => {
    try {
        const {id} = req.params
        const appointments = await Appointment.find({
            patient: id
        })
        res.status(200).json(appointments)
    }catch(error) {
        console.log(error);
        res.status(500).send("Server error");
    }
}

const createAppointment = async (req,res) => {
    try{
        const {doctor, patient, date, reason} = req.body
        const appointment = new Appointment({
            doctor, patient, date, reason
        })
        await appointment.save()
        res.status(200).json(appointment)
    }catch(error){
        console.log(error);
        res.status(500).send("Server error");
    }
}

const updateAppointment = async (req, res) => {
    try {
        const {id} = req.params
        const { date } = req.body
        const appointment = await Appointment.findOneAndUpdate({_id : id},{
            date : date
        }, {new : true})

        res.status(200).json(appointment)

    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
}

const cancleAppointment = async (req, res) => {
    try {
        const {id} = req.params
        const appointment = await Appointment.findOneAndUpdate({_id : id},{
            state : 'cancled'
        }, {new : true})

        res.status(200).json(appointment)
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
}

module.exports = {
    getAppointments_doctor,
    getAppointments_patient,
    createAppointment,
    updateAppointment,
    cancleAppointment
}