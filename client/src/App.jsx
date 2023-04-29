import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import DoctorLogin from "./components/DoctorLogin/DoctorLogin"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from "react"
import Menu from "./components/Doctor/Menu/Menu"
import Logout from "./components/Doctor/Logout"
import Appointments from "./pages/Appointments"

// import classes from './App.module.css';
// import resets from './components/_resets.module.css';
// import { LandingPage } from './components/LandingPage/LandingPage';

function App() {
  const [userLogged, setUserLogged] = useState(false)

  useEffect(() => {
    setUserLogged(localStorage.getItem("authenticated-itex") || false)
  }, [])
  

  return (
    <BrowserRouter>
    {userLogged && <Menu />}
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/login-doctor" element= {<DoctorLogin setUserLogged={setUserLogged} />} />
        <Route path="/doctor/dashboard/patients" element= {<Dashboard />} />
        <Route path="/doctor/dashboard/appointments" element= {<Appointments />} />
        <Route path="/doctor/dashboard/settings" element= {<Dashboard />} />
        <Route path="/doctor/dashboard/logout" element= {<Logout setUserLogged={setUserLogged} />} />
      </Routes>
    </BrowserRouter>
    // <div className={`${resets.storybrainResets} ${classes.root}`}>
    //   <LandingPage />
    // </div>
  )
}

export default App
