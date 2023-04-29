require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const doctorRoutes = require('./routes/doctorRoutes')
const patientRoutes = require('./routes/patientRoutes')
const appointmentRoutes = require('./routes/appointmentRoutes')

const server = express();
server.use(bodyParser.urlencoded({extended : true}));
server.use(bodyParser.json());
server.use(cors())

server.use('/doctor', doctorRoutes)
server.use('/patient', patientRoutes)
server.use('/appointment', appointmentRoutes)

mongoose.connect(process.env.MONGO_URL)
.then((ans)=>{
    server.listen(process.env.PORT,()=>{
        console.log(`connected to db and server listening on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(err);
    console.log("Error in the connection");
})
