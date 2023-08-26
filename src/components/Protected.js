import React from 'react'
import { useEffect } from 'react'
import { Navigate,Link, useNavigate } from 'react-router-dom'
import {Login} from '../components/login/login'

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(() => {
      let login = localStorage.getItem('login');
      if(!login)
      navigate('/Login');
    
      
    })
    
  
    return (
        <div>     

        <Component />
        </div>
  )
}

export default Protected