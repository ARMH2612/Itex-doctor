const Doctor = require('../models/doctorModel')
const bcrypt = require('bcrypt')

const comparePassword = async (psw_input,password_user) =>{
    try {
        return await bcrypt.compare(psw_input, password_user)
    } catch (error) {
        throw new Error(error)
    }
}

const login = async (req, res) => {

    const {email, password} = req.body
    try{
        const doctor = await Doctor.findOne({email})
        if(!doctor){
            return res.status(404).json({message: 'Invalid email '})
        }
        const isMatch = await comparePassword(password, doctor.password)

        if(!isMatch){
            return res.status(400).json({message: 'Invalid password'})
        }
        
        // here we need to compare the JWT token and send it back to the client
        // for now just login
        res.status(200).json(doctor)

    }catch(error){
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
}

const createDoctor = async (req, res) => {
    try{
        const {name, email, password, areaOfExperties} = req.body

        const existingDoctor = await Doctor.findOne({email})
        if(existingDoctor){
            return res.status(400).json({message : "Doctor already exists"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newDoctor = new Doctor({
            name,
            email,
            password:hashedPassword,
            areaOfExperties
        })

        await newDoctor.save()
        res.status(200).json(newDoctor)
    }catch(error){
        console.log(error);
        res.status(500).json({message:'Server Error'})
    }
}

module.exports ={
    login,
    createDoctor
}