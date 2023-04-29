import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaCalendarAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

const Menu = () => {
  return (
    <div>
      {/* Menu bar */}
      <ul className="flex justify-between items-center p-4 bg-blue-800 text-white">
        <li className="inline-block mr-4">
          <Link to="/doctor/dashboard/patients">
            <FaUser className="inline-block mr-2" />
            Patients
          </Link>
        </li>
        <li className="inline-block mr-4">
          <Link to="/doctor/dashboard/appointments">
            <FaCalendarAlt className="inline-block mr-2" />
            Appointments
          </Link>
        </li>
        <li className="inline-block">
          <Link to="/doctor/dashboard/logout">
            <FaSignOutAlt className="inline-block mr-2" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu