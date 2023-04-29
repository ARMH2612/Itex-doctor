import React from 'react'
import { useState } from 'react'
import Email from '../../assets/email_icon.png'
import Pin from '../../assets/pin_icon.png'
import Phone from '../../assets/phone_icon.png'

const ContactUs = () => {
    const [available, setAvailable] = useState([
        {id:1, alt:"Email", title: "Email", icon: Email, text:"Healthy 24.@Email.com"},
        {id:2, alt:"Address", title: "Address", icon: Pin, text:"Lorem ipsum dolor sit amet, consectetur 33"},
        {id:3, alt:"Phone Number", title: "Phone Number", icon: Phone, text:"+1 (555) 000-0000"}
    ])
  return (
    <div className='bg-white flex flex-col justify-center items-center sm:h-screen'>
    <div className='flex flex-col sm:flex-row justify-between w-10/12'>
      <div className='w-full sm:w-6/12 sm:pr-8'>
        <h1 className='text-blue-600 text-4xl font-medium mb-4 text-center sm:text-left'>Contact us</h1>
        <p className='text-sm mb-4 text-center sm:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your name" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your email address" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Type your message..."></textarea>
          </div>
          <button className='text-sm text-white bg-orange-500 py-3 px-12 mt-2 cursor-pointer'>Submit</button>
        </form>
      </div>
      <div className='w-full sm:w-6/12 flex justify-center items-center'>
        <div>
          <h1 className='text-blue-600 text-4xl font-medium mb-4 text-center sm:text-left'>Available also on :</h1>
          <div>
            {
              available.map(item=>(
                <div className='flex items-center p-3 border-b-2' key={item.id}>
                  <img className='mr-9' src={item.icon} alt={item.alt} />
                  <div>
                    <h2 className='font-medium text-xl'>{item.title}</h2>
                    <p className='text-sm'>{item.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default ContactUs