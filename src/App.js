import React from 'react'
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css'
import { ExerciseDetail } from './pages/ExerciseDetail';
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Form } from './pages/Form';
import {Login} from '../src/components/login/login'
import {Register} from '../src/components/register/register'
import { useState } from 'react';
import Protected from './components/Protected'



const  App = () => {
  const [ user, setLoginUser] = useState({})
  
  return (
   <Box width = "400px" sx = {{width: {xl: '1488px'}}} m = "auto">
    <Navbar />
    <Routes>
    <Route path = "/" element = { <Protected Component = {Home} />} />
      
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path = "/login" element = {<Login setLoginUser={setLoginUser} />} /> 
       <Route path="/register" element = {<Register  /> } />
    </Routes>
    <Footer />
   </Box>
  )
}

export default App