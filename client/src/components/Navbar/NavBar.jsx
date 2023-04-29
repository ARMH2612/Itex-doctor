import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Calling from '../../assets/calling.png'
const NavBar = () => {
    const [menu,setMenu] = useState([
        {id:1, to:'/', title:'Home'},
        {id:2, to:'/', title:'About us'},
        {id:3, to:'/', title:'Our services'},
        {id:4, to:'/', title:'Contact us'},
        {id:5, to:'/login-doctor', title:'Login'},
    ])
    const [menuOpen,setMenuOpen] = useState(false)
  return (
<nav className="bg-white h-16 pt-2">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
    <div className="relative text-blue-600 font-medium text-2xl w-32">
      <h1 className="relative left-0 z-10 top-0">Healthy 24.</h1>
      <div className="absolute z-0 -top-1 -right-1 text-white w-5 h-5 flex justify-center items-center bg-orange-500 rounded-full">+</div>
    </div>

    <div className="items-center justify-between flex w-auto" id="navbar-cta">
      <button className="block md:hidden border border-gray-800 p-1 rounded-md text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={() => setMenuOpen(!menuOpen)}>
        <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <ul className={`md:flex ${menuOpen ? 'flex flex-col' : 'hidden'} font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white`}>
        {
          menu.map((item) => {
            return (
              <li key={item.id}>
                <Link className="font-normal" to={item.to}>{item.title} </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
    <div className="hidden md:flex items-center">
      <img className="w-7 mr-3" src={Calling} alt="calling icon" />
      <div className="text-center">
        <h3 className="text-sm text-slate-500">Services disponible</h3>
        <h1>0453 628 125</h1>
      </div>
    </div>
  </div>
</nav>

  )
}

export default NavBar