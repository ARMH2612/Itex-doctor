const express = require('express');
const router = express.Router()

const {
    getAppointments_doctor,
    getAppointments_patient,
    createAppointment,
    updateAppointment,
    cancleAppointment
} = require('../controllers/appointmentController')

router.get('/appointments-doctor/:id',getAppointments_doctor )
router.get('/appointments-patient/:id',getAppointments_patient )
router.post('/create-appointment',createAppointment)
router.put('/update-appointment/:id', updateAppointment)
router.post('/cancle-appointment/:id',cancleAppointment)

module.exports = router