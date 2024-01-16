import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Stack} from '@mui/material'

import { Nav, NavDropdown } from 'react-bootstrap'


  export const Navbar = () => {
const navigate = useNavigate();

  let logOut = () =>{
    localStorage.clear();
    navigate('/Login');

  }

  let logout = localStorage.getItem('logout');

  let name = localStorage.getItem('name');
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
   <Stack direction = "row" justifyContent= "space-around" sx ={{ gap: {sm: '122px' , xs : '40px'}, mt: {sm: '32px',xs: '20px'}, justifyContent: 'none'}} px = '20px'>
   {/*  <Link to ="/">
       {  <img src = {Pogo} alt = "logo" style = {{ width:'48px', height:'42px', margin : '0 20px'}} /> }
    </Link> */}
    <Stack direction = "row" gap = "40px" fontSize = '24px' alignItems= 'flex-end' >
        <Link to = "/" style = {{textDecoration : 'none', color : '#3A1212', borderBottom : '3px solid #9c27b0'}}>Home</Link>
        <a href = "#exercises" style = {{textDecoration : 'none', color : '#3A1212'}}>Exercises</a>
        <Link to = "/login" style = {{textDecoration : 'none', color : '#3A1212'}}>Login</Link>
       
    </Stack>
    {name && (
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
          <NavDropdown title={name} id="nav-dropdown">
            <NavDropdown.Item onClick={logOut}>{logout}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      )}
   </Stack>
   
   
  )
}

export default Navbar;