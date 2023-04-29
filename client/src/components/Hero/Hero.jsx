import React, { useState } from 'react'
import Online from '../../assets/online_icon.png'
import Medical from '../../assets/medical_icon.png'
import Available from '../../assets/available_icon.png'
import Health from '../../assets/health_icon.png'
import './Hero.css'
const Hero = () => {
  const [bar, setBar] = useState([
    {id:1, alt:"online consultations",  image : Online, active : false},
    {id:2, alt:"Medical advice",  image : Medical, active : false},
    {id:3, alt:"availability 24/7",  image : Available, active : true},
    {id:4, alt:"Health education and resources",  image : Health, active : false},
  ])
  return (
    <div className='w-screen h-screen relative'>
  <div className="bg-gradient-mask h-4/5 w-screen p-8 md:p-28">
    <div className='flex flex-col items-start justify-between gap-4 md:gap-6 h-56 md:h-80 w-full md:w-5/12'>
      <h1 className="text-2xl md:text-5xl">
        Feel Better about <br />
        Finding <span className="font-medium text-blue-800">Healthcare</span>
      </h1>
      <p className="text-sm md:text-base">
        Healththy 24 Online ranks highest in telehealth satisfaction among direct-to-consumer brands.
      </p>
      <button className='text-sm text-white bg-orange-500 py-2 md:py-3 px-8 md:px-12 mt-2 md:mt-4 cursor-pointer'>Get Started</button>
    </div>
  </div>
  <div className='h-16 md:h-44 bg-blue-800 flex w-full md:w-8/12 left-1/2 transform -translate-x-1/2 absolute bottom-0 md:top-3/4'>
    {
      bar.map((item)=>{
          return (
            <div className='h-16 md:h-44 w-1/3 md:w-3/12 flex justify-center items-center' key={item.id}>
              <img src={item.image} alt={item.alt} />
            </div>
          )
      })
    }
  </div>
</div>

  )
}

export default Hero