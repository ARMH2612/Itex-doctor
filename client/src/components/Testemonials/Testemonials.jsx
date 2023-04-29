import React from 'react'
import "./Testemonials.css"
import Stars from '../../assets/stars.png'
import Avatar from '../../assets/avatar.png'

const Testemonials = () => {
  return (
    <div className="h-screen w-screen bg-doctors-image flex justify-center items-center">
        <div className="w-10/12 h-4/5 flex justify-center bg-white p-6">
            <div className="w-10/12 h-4/5  m-auto flex flex-col justify-between items-center">
                <h1 className='text-orange-500 flex items-start justify-center font-medium w-44 h-10  border-b-2 border-b-orange-500 '>Testimonial</h1>
                <h2 className='text-3xl font-medium m-3 text-center'>You're in safe hands</h2>
                <img src={Stars} alt="Rating stars" />
                <div className="flex flex-col justify-center items-center">
                    <p className="text-center mb-4 w-2/3">
                        Our caring and supportive team has experience working with patients face-to-face and dealing with mental health issues. Spend less time searching for help and more time connecting with someone you can trust.
                    </p>
                    <img src={Avatar} alt="Avatar image" />
                    <h2 className='text-xl font-medium mt-3'>Christopher Nolan</h2>
                    <p className='text-sm text-slate-600'>Our client</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testemonials