import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DoctorLogin = ({setUserLogged}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const data = { email, password };

    try {
      const res = await axios.post('http://localhost:3001/doctor/login-doctor', data);
      // console.log(res.data);
      setUserLogged(true)
      localStorage.setItem("authenticated-itex", true);
      // console.log( res.data);
      localStorage.setItem("doctor", JSON.stringify(res.data))
      navigate('/doctor/dashboard/patients');
    } catch (err) {
      console.log(err.response.data);
      setErrorMessage(err.response.data.message); // set error message if login fails
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
            <p className="font-bold">Error:</p>
            <p>{errorMessage}</p>
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            className="className='text-sm text-white bg-blue-500 py-3 px-12 mt-2 cursor-pointer'"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorLogin