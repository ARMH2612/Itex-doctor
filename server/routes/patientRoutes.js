const express = require('express');
const router = express.Router()

const {
    getPatients,
    updatePatient,
    createPatient,
    getPatient
} = require('../controllers/patientController')

router.get('/patients', getPatients)
router.get('/patient/:id', getPatient)
router.put('/update-patient/:id',updatePatient)
router.post('/create-patient', createPatient)

module.exports = router