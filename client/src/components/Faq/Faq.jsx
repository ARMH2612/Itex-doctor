import React from 'react'
import FapComp from '../FaqCom/FapComp'
import DoctorHand from '../../assets/doctor_hand.png'

const Faq = () => {
  return (
    <div className='min-h-screen bg-white flex justify-center items-center'>
  <div className='flex flex-col justify-between w-10/12 md:flex-row'>
    <div className='w-full md:w-6/12'>
      <h1 className='text-slate-800 text-4xl font-medium mb-4'>FAQ</h1>
      <p className='text-sm mb-4'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."</p>
      <FapComp />
    </div>
    <div className='w-full md:w-6/12 flex justify-center items-center'>
      <div className='w-10/12 md:w-7/12'>
        <img className='w-full' src={DoctorHand} alt="Doctor hand" />
        <div className='bg-blue-600 p-6 text-white'>
          <h1 className='font-medium'>Still have a question?</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='text-sm text-black bg-white py-3 px-12 mt-2 cursor-pointer'>Contact us</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Faq