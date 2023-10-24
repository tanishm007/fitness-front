import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
//import 'E:/Programming/project/Fitness_web_Application-master/src/pages'


export const Register = () => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("https://fitness-back-5jw0.onrender.com/register", user)
            .then( res => {
                alert(res.data.message)
                navigate('/login')
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <section  style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>
            <div className="register">
                <div className="col-1">
                    <h2>Sign Up</h2>
                    <span>register and enjoy the service</span>
        <form id='form' className='flex flex-col'>
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="btn" onClick={register} >Register</div>
            <div>or</div>
            <div className="btn" onClick={() => navigate('/login')}>Login</div>
        </form>
        
        </div>
          
        </div>
    </section>
    )
}

export default Register