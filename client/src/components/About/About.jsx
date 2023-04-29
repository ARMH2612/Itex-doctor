import React from 'react'
import IMAGE from '../../assets/keyboard_leaf.jpg'
const About = () => {
  return (
    <div className="bg-white p-8 md:p-28 flex flex-col md:flex-row justify-between items-center">
  <div className="w-full md:w-2/5 h-auto md:h-96 text-center md:text-justify md:mr-8">
    <h1 className="text-3xl md:text-4xl mb-4 md:mb-7 font-medium">
      About <span className="text-blue-600">Healthy 24.</span>
      <span className="text-white bg-orange-500 w-7 h-7 inline-block rounded-full text-center md:hidden">+</span>
    </h1>
    <section className="text-sm md:text-base">
      <p className="mb-4 md:mb-8">
        With 24/7 access to online doctors, psychiatrists, psychologists, therapists and other medical experts, care is always available, anytime and anywhere. Select and see your favorite providers again and again, right from your smartphone, tablet or computer.
      </p>
      <p>
        Better yet, Doctor On Demand is a covered benefit for over 98 million Americans by their health plan or employer. It's free to sign up and easy to check your coverage when you register.
      </p>
    </section>
  </div>
  <div className="w-full md:w-auto h-48 md:h-96 flex justify-center items-center">
    <img src={IMAGE} alt="a leaf next to a keyboard" className="w-full h-auto md:max-w-full md:max-h-full" />
  </div>
</div>

  )
}

export default About