import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Logout = ({setUserLogged}) => {
    const navigate = useNavigate();
    useEffect(() => {
        setUserLogged(false)
        localStorage.setItem("authenticated-itex", false);
        navigate('/');
    }, [])
    
  return (
    <div>Logging out ...</div>
  )
}

export default Logout