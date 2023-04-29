import React from 'react'

const EditeModel = ({handleEditInputChange,handleUpdate,setIsEditModalOpen, appointment }) => {
  return (
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
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Edit Appointment</h3>
                <div className="mt-2">
                    <form>
                    <div className='w-full'>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Patient</label>
                        <input type="text" name="patient" id="patient" onChange={(e)=>{handleEditInputChange(e)}} value={appointment.patient} disabled className="form-input rounded-md shadow-sm mt-1 block w-full" />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                        <input type="date" name="date" onChange={(e)=>{handleEditInputChange(e)}} id="date" className="form-input rounded-md shadow-sm mt-1 block w-full" />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                        <textarea name="reason" onChange={(e)=>{handleEditInputChange(e)}} id="reason" value={appointment.reason} disabled  className="form-textarea rounded-md shadow-sm mt-1 block w-full" rows="3"></textarea>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

            <button type="button" onClick={() => handleUpdate(appointment._id, appointment)} className='text-sm text-white bg-green-500 py-3 px-12 mt-2 cursor-pointer'>Update</button>
            <button type="button" onClick={() => setIsEditModalOpen(false)} className='text-sm text-gray-800  py-3 px-12 mt-2 cursor-pointer'>Cancel</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EditeModel