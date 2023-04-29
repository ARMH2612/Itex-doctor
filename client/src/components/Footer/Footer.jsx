import React from 'react'
import Download from '../../assets/download_rating.png'

const Footer = () => {
  return (
    <div className='p-6'>
        <div className='flex justify-around'>
            <div>
                <h1 className='font-medium mb-4'>Help center</h1>
                <ul className='text-sm text-slate-600'>
                    <li>Frequently Asked Questions</li>
                    <li>Driver Training Platform</li>
                    <li>Support</li>
                </ul>
            </div>
            <div>
                <h1 className='font-medium mb-4'>Healthy 24</h1>
                <ul className='text-sm text-slate-600'>
                    <li>C.G.U</li>
                    <li>Privacy</li>
                    <li>Press</li>
                    <li>Partenership</li>
                </ul>
            </div>
            <div>
                <h1 className='font-medium mb-4'>Download the application</h1>
                <img  src={Download} alt="download platforms" />
            </div>
        </div>
        <h1 className='text-sm text-slate-600'>Healthy 2023 &copy;</h1>
    </div>
  )
}

export default Footer