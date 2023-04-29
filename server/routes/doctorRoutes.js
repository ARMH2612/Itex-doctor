const express = require('express');

const {
    login,
    createDoctor
} = require('../controllers/doctorContoller')

const router = express.Router()

router.post('/create-doctor',createDoctor)
router.post('/login-doctor',login)

module.exports = router