import React from 'react'
import NearestImage from '../../assets/nearest.png'

const Nearest = () => {
  return (
<div className="h-screen flex items-center justify-center bg-white">
  <div className="flex flex-col lg:flex-row justify-between items-center w-11/12 lg:w-10/12 h-3/4">
    <img className="h-full lg:w-1/2 object-cover" src={NearestImage} alt="A picture of a hospital" />
    <div className="w-full lg:w-1/2 lg:pl-10">
      <h1 className="text-3xl lg:text-4xl mb-5 font-medium text-blue-800 text-center lg:text-left">Search the Nearest hospital from you</h1>
      <p className="text-sm mb-5 text-center lg:text-left">
        Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).
      </p>
      <button className="text-sm text-white bg-orange-500 py-3 px-12 mt-2 cursor-pointer w-full">
        Search
      </button>
    </div>
  </div>
</div>

  )
}

export default Nearest