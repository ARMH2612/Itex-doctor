import React from 'react'
import Circles from '../../assets/circles.png'

const Thebest = () => {
  return (
<div className="h-screen flex items-center justify-center bg-white">
  <div className="flex flex-col md:flex-row justify-between items-center w-11/12 md:w-10/12 h-3/4">
    <div className="w-full md:w-5/12 mb-8 md:mb-0 md:mr-10">
      <h1 className="text-3xl md:text-4xl mb-5 font-medium">Find The Best doctor you need</h1>
      <p className="text-sm md:text-base mb-5">From rashes to colds, stress management to diabetes management, individual treatment plans are created around you. Our medical and mental health providers work together, keeping your personal journey protected and connected.</p>
      <button className="text-sm md:text-base bg-white text-blue-800 border border-blue-800 py-3 px-12 mt-2 cursor-pointer">Get Started</button>
    </div>
    <div className="w-full md:w-1/2">
      <img className="h-auto w-full" src={Circles} alt="Circles" />
    </div>
  </div>
</div>

  )
}

export default Thebest