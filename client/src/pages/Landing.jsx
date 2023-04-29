import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Whyus from '../components/Whyus/Whyus'
import Gettheapp from '../components/GetTheApp/Gettheapp'
import Thebest from '../components/Thebest/Thebest'
import WeAreHere from '../components/WeAreHere/WeAreHere'
import Nearest from '../components/Nearest/Nearest'
import Testemonials from '../components/Testemonials/Testemonials'
import Faq from '../components/Faq/Faq'
import OurSecret from '../components/OurSecret/OurSecret'
import ContactUs from '../components/ContactUs/ContactUs'
import Localisation from '../components/Localisation/Localisation'
import Footer from '../components/Footer/Footer'

const Landing = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <About />
        <Whyus />
        <Gettheapp />
        <Thebest />
        <WeAreHere />
        <Nearest />
        <Testemonials />
        <Faq />
        <OurSecret />
        <ContactUs />
        <Localisation />
        <Footer />
    </div>
  )
}

export default Landing