import React from 'react'
import Doctors from '../../assets/doctors_smiling.png'
import "./OurSecret.css"

const OurSecret = () => {
  return (
<div className="bg-our_secret relative">
    <div className="p-6 md:p-24 text-center w-full flex flex-col justify-center items-center">
        <h1 className='text-2xl md:text-4xl font-medium mb-5 md:w-2/5 border-black'>Our secret to great virtual care is great doctors</h1>
        <p className='text-sm md:text-base'>Board-certified | Top 5% of medical specialists in the world | +90% satisfaction rating</p>
    </div>
    <img className='w-full md:absolute md:bottom-0' src={Doctors} alt="doctors facing the camera and smiling" />
</div>

  )
}

export default OurSecret