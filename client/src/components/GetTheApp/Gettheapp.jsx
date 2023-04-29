import React from 'react'
import Download from '../../assets/download_rating.png'

const Gettheapp = () => {
  return (
    <div className="bg-blue-800 md-p-3 text-white h-64  md:h-80 flex items-center justify-center">
      <div className='flex flex-col md:flex-row md:justify-between max-w-screen-lg w-full p-8 md:p-0'>
        <div className='md:w-2/4 md:pr-8'>
            <h1 className='text-4xl font-medium'>Get the app</h1>
            <h3 className='text-2xl mb-3'>Rated 4.9 out of 5 by more than 150k reviewers.</h3>
            <p className='text-sm'>Register in the app and be ready to see a doctor, therapist or psychiatrist anytime, anywhere. Available for iPhone and Android.</p>
        </div>
        <img className='md:w-auto w-3/4 mx-auto md:mx-0 mt-4 md:mt-0' src={Download} alt="Download systems and rating" />
      </div>
    </div>
  )
}

export default Gettheapp