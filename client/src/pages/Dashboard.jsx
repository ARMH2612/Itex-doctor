import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Dashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patients, setPatients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newPatients, setNewPatients] = useState({name:"",email:"",dateOfBirth:"",address:""})

  useEffect(() => {
    axios.get("http://localhost:3001/patient/patients").then((response) => {
      setPatients(response.data);
    });
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newPatients);
     axios.post('http://localhost:3001/patient/create-patient', newPatients)
    .then(function (response) {
      console.log(response);
      setIsModalOpen(false)
      setPatients([response.data, ...patients])
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  return (
<div className="flex flex-row flex-wrap gap-10 w-screen">
  <div className="flex-grow w-1/3">
    <header className='flex justify-between p-3  w-full'>
      <h2 className="text-2xl font-semibold mb-4" >Patients</h2>
      <button onClick={() => setIsModalOpen(true)} className='text-sm text-white bg-green-500 py-3 px-12 mt-2 cursor-pointer'>Add Patient</button>
    </header>
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="px-3 py-2">Name</th>
          <th scope="col" className="px-3 py-2">Email</th>
          <th scope="col" className="px-3 py-2">Date of Birth</th>
          <th scope="col" className="px-3 py-2">Address</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr
            key={patient._id}
            onClick={() => setSelectedPatient(patient)}
            className="cursor-pointerbg-white border-b"
          >
            <td className="px-3 py-2">{patient.name}</td>
            <td className="px-3 py-2">{patient.email}</td>
            <td className="px-3 py-2">{patient.dateOfBirth}</td>
            <td className="px-3 py-2">{patient.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="flex-grow-0 w-1/3">
    {selectedPatient ? (
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{selectedPatient.name}</h2>
        <p><span className="font-semibold">Email:</span> {selectedPatient.email}</p>
        <p><span className="font-semibold">Date of Birth:</span> {selectedPatient.dateOfBirth}</p>
        <p><span className="font-semibold">Address:</span> {selectedPatient.address}</p>
        <p className="mt-4"><span className="font-semibold">Medical History:</span> {selectedPatient.medicalHistory}</p>
        <p>{selectedPatient.medicationHistory}</p>
        <div className='w-full flex justify-between'>
          <button className='text-sm text-white bg-orange-500 py-3 px-12 mt-2 cursor-pointer'>Add medical history</button>
          <button className='text-sm text-white bg-blue-500 py-3 px-12 mt-2 cursor-pointer'>Edit</button>
        </div>
      </div>
    ) : (
      <div className="p-6 bg-white rounded-md shadow-md text-center">
        <p className="text-xl">Select a patient to view their details.</p>
      </div>
    )}
  </div>


  {isModalOpen && (
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Add Patient</h3>
              <div className="mt-2">
                <form>
                  <div className='w-full'>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" name="name" id="name" onChange={(e)=>{setNewPatients({...newPatients, name: e.target.value})}} className="form-input rounded-md shadow-sm mt-1 block w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" name="email" onChange={(e)=>{setNewPatients({...newPatients, email: e.target.value})}} id="email" className="form-input rounded-md shadow-sm mt-1 block w-full" />
                  </div>
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input type="date" name="dateOfBirth" onChange={(e)=>{setNewPatients({...newPatients, dateOfBirth: e.target.value})}} id="dateOfBirth" className="form-input rounded-md shadow-sm mt-1 block w-full" />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea name="address" onChange={(e)=>{setNewPatients({...newPatients, address: e.target.value})}} id="address" className="form-textarea rounded-md shadow-sm mt-1 block w-full" rows="3"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

          <button type="button" onClick={(e) => handleSubmit(e)} className='text-sm text-white bg-green-500 py-3 px-12 mt-2 cursor-pointer'>Add</button>
          <button type="button" onClick={() => setIsModalOpen(false)} className='text-sm text-gray-800  py-3 px-12 mt-2 cursor-pointer'>Cancel</button>
        </div>
      </div>
      </div>
      </div>
  )
  }
</div>

  )
}

export default Dashboard