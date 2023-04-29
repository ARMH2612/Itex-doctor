import React, { useState } from 'react'
import Symps from '../../assets/symp.png'
const WeAreHere = () => {
    const [sicks, setSicks] = useState([
        {id : 1, image : Symps, title: 'Cold & flu', symps: ["Cough","Headaches","Nausea & vomiting","Fever"]},
        {id : 2, image : Symps, title: 'Mental health', symps: ["Cough","Headaches","Nausea & vomiting","Fever"]},
        {id : 3, image : Symps, title: 'Mental health', symps: ["Cough","Headaches","Nausea & vomiting","Fever"]},
        {id : 4, image : Symps, title: 'Headaches', symps: ["Cough","Headaches","Nausea & vomiting","Fever"]},
        {id : 5, image : Symps, title: 'Everyday care', symps: ["Cough","Headaches","Nausea & vomiting","Fever"]},
        {id : 6, image : Symps, title: 'Allergies', symps: ["Cough","Headaches","Nausea & vomiting","Fever"]}
    ])
  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center w-screen p-4 md:p-14">
    <div className="flex flex-col items-center justify-center w-full md:w-2/5 mb-8 md:mb-14">
      <h1 className='text-blue-800 text-3xl md:text-4xl mb-3 font-medium text-center md:text-left'>We're here for you</h1>
      <p className='text-sm text-center md:text-left'>Visits start at $79 for a 15 min consultation, or could be free depending on your insurance. See costs for more information.</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 w-11/12 md:w-9/12'>
      {
        sicks.map((item)=>{
          return (
            <div key={item.id} className=' bg-white p-4 md:p-6 border h-48 md:h-56'>
              <div className='flex justify-between mb-4 font-medium text-xl'>
                <h1 className='text-center md:text-left'>{item.title}</h1>
                <img src={item.image} alt="logo" className='h-6 w-6' />
              </div>
              <div className='pl-4 md:pl-8'>
                <ul className='list-disc'>
                  {
                    item.symps.map((symp, i)=>{
                      return (
                        <li key={i}>{symp}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
  
  )
}

export default WeAreHere