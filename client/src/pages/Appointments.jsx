import { useState, useEffect } from 'react';
import axios from 'axios';
import EditeModel from '../components/Doctor/EditModel/EditeModel';

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [doctor, setDoctor] = useState(null)
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [formData, setFormData] = useState({
    doctor:JSON.parse(localStorage.getItem("doctor"))._id,
    patient: '',
    date: '',
    reason: '',
});
const [appointment, setAppointment] = useState({
    doctor:JSON.parse(localStorage.getItem("doctor"))._id,
    patient: '',
    date: '',
    reason: '',
});

  useEffect(() => {
    setDoctor(JSON.parse(localStorage.getItem("doctor")))
    axios.get(`http://localhost:3001/appointment/appointments-doctor/${JSON.parse(localStorage.getItem("doctor"))._id}`)
      .then(res => {
        setAppointments(res.data);
        
        axios.get("http://localhost:3001/patient/patients").then((response) => {
            setPatients(response.data);
        });

      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleInputChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleEditInputChange = e => {
    setAppointment(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    axios.post('http://localhost:3001/appointment/create-appointment', formData)
      .then(res => {
        setAppointments(prevState => [...prevState, res.data]);
        setIsModalOpen(false);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleDelete = id => {
    setAppointments(prevState => prevState.filter(appointment => appointment._id !== id));
  }

  const handleCancel = id => {
      axios.post(`http://localhost:3001/appointment/cancle-appointment/${id}`)
        .then(res => {
          setAppointments(prevState => prevState.map(appointment => {
            if (appointment._id === id) {
              return res.data;
            } else {
              return appointment;
            }
          }));
        })
        .catch(err => {
          console.log(err);
        });

  }

  const handleUpdate = (id, updatedData) => {
    axios.put(`http://localhost:3001/appointment/update-appointment/${id}`, updatedData)
      .then(res => {
        setAppointments(prevState => prevState.map(appointment => {
          if (appointment._id === id) {
            return res.data;
          } else {
            return appointment;
          }
        }));
        setIsEditModalOpen(false)
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleOpenEdit = (appointment) => {
    setAppointment(appointment)
    setIsEditModalOpen(true)
  }
  return (
    <div className="p-8">
      <header className='flex justify-between p-3  w-full'>
        <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
        <button onClick={() => setIsModalOpen(true)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add Appointment
        </button>
      </header>

      <table  className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-4">Patient Name</th>
            <th scope="col" className="px-6 py-4">Date</th>
            <th scope="col" className="px-6 py-4">Time</th>
            <th scope="col" className="px-6 py-4">Type</th>
            <th scope="col" className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment._id}>
              <td className="px-6 py-4">{appointment.patient}</td>
              <td className="px-6 py-4">{appointment.date}</td>
              <td className="px-6 py-4">{appointment.reason}</td>
              <td className={appointment.state==='Active'?" bg-green-300  px-6 py-4":" bg-red-300 px-6 py-4"}>{appointment.state}</td>
              <td className="px-6 py-4">
                <button onClick={() => handleOpenEdit(appointment)} className="text-blue-500  font-bold py-1 px-2 rounded mr-2" >Edit</button>
                <button onClick={() => handleDelete(appointment._id)} className="text-red-500  font-bold py-1 px-2 rounded mr-2">
                  Delete
                </button>
                {appointment.state==='Active' && <button onClick={() => handleCancel(appointment._id)} className="text-gray-500  font-bold py-1 px-2 rounded mr-2" >Cancel</button>}
            </td>
            </tr>
          ))}
        </tbody>
        </table>

{isEditModalOpen && (<EditeModel  handleEditInputChange={handleEditInputChange} handleUpdate={handleUpdate} setIsEditModalOpen={setIsEditModalOpen} appointment={appointment} />)}
        
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
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Add Appointment</h3>
              <div className="mt-2">
                <form>
                  <div className='w-full'>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Patient</label>
                    <select name="patient" id="patient" onChange={(e)=>{handleInputChange(e)}} className="form-input rounded-md shadow-sm mt-1 block w-full">
                    {
                        patients.map((patient)=>{
                            return (
                                <option key={patient._id} value={patient._id}>{patient.name}</option>
                            )
                        })
                    }
                    </select>
                  
                  </div>
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input type="date" name="date" onChange={(e)=>{handleInputChange(e)}} id="date" className="form-input rounded-md shadow-sm mt-1 block w-full" />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                    <textarea name="reason" onChange={(e)=>{handleInputChange(e)}} id="reason" className="form-textarea rounded-md shadow-sm mt-1 block w-full" rows="3"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

          <button type="button" onClick={(e) => handleSubmit(e)}  className='text-sm text-white bg-green-500 py-3 px-12 mt-2 cursor-pointer'>Add</button>
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
export default Appointments