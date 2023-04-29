import React from 'react'
import IMAGE from '../../assets/hug.jpg'

const Whyus = () => {
  return (
    <div className="bg-white p-28 w-screen flex justify-between flex-wrap">
        <div className="w-full md:w-auto h-48 md:h-96 flex justify-center items-center">
            <img src={IMAGE} alt="a leaf next to a keyboard" />
        </div>
        <div className="w-full md:w-2/5 h-auto md:h-96 text-center md:text-justify md:mr-8">
            <h1 className='text-4xl mb-7 font-medium'>Why choosing <span className='text-blue-600'>Healthy 24.+</span></h1>
            <section className="text-sm">
                <p className='mb-8'>
                    Meet with an urgent care doctor in minutes, 24/7.Schedule a session with a therapist or psychiatrist this week.
                </p>
                <ul className='list-disc'>
                    <li>Experienced and Professional Team</li>
                    <li>Comprehensive Services</li>
                    <li>User-Friendly Interface</li>
                    <li>Safe and Secure Data Storage</li>
                    <li>Personalized Care</li>
                    <li>Positive Reputation</li>
                    <li>Convenient Access to Healthcare Services.</li>
                </ul>
            </section>
        </div>
    </div>
  )
}

export default Whyus