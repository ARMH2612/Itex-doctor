const Patient = require('../models/patientModel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const createPatient = async (req,res)=>{
    try{
        const {name, email, dateOfBirth,address} = req.body
        const password = "1234"
        const existingPatient = await Patient.findOne({email})
        if(existingPatient){
            return res.status(400).json({message : "Patient already exists"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newPatient = new Patient({
            name,
            email,
            password:hashedPassword,
            dateOfBirth,
            address
        })

        await newPatient.save()
        res.status(200).json(newPatient)
    }catch(error){
        console.log(error);
        res.status(500).json({message:'Server Error'})
    }
}

const getPatients = async (req,res) =>{
    const patients = await Patient.find({}).sort({createdAt:-1})
    res.status(200).json(patients)
}

const getPatient = async (req,res) =>{
    const {id} = req.params
    const patient = await Patient.find({_id:id})
    res.status(200).json(patient)
}

const updatePatient = async (req,res)=>{
    const {id} = req.params
    const {name, dateOfBirth, address} = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: 'Invalid patient ID' });
        }
        const patient = await Patient.findOneAndUpdate({_id:id},{
            name, dateOfBirth, address
        }, {new:true})
        if(!patient){
            return res.status(404).json({message: 'Patient not found'})
        }
        res.status(200).json(patient)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}


const getMedicalHistories = async (req, res) => {
    try {
        const {id} = req.params
        const medicalHistory = await Patient.find({_id:id},{"medicationHistory":1, _id:0})
        res.status(200).json(medicalHistory)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}

const createMedicationHistory = async (req, res) => {
    try {
        const {patient, diagnosis,treatment,note} = req.body
        const newPatient = await Patient.findOneAndUpdate(
            {_id : patient},
            {$push:{
                medicationHistory:{
                    diagnosis,treatment,note
                }
            }},
            {new:true}
        )
        if(!newPatient){
            return res.status(404).json({message: 'Patient not found'})
        }
        res.status(200).json(newPatient)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Server Error'})
    }
}


module.exports = {
    getPatients,
    getPatient,
    updatePatient,
    createPatient,
    getMedicalHistories,
    createMedicationHistory
}