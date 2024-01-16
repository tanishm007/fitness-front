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
    const [loading, setLoading] = useState(false);
    const register = () => {
        setLoading(true);
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("https://fitness-back-5jw0.onrender.com/register", user)
            .then( res => {
                alert(res.data.message)
                navigate('/login')
            }).catch((error) => {
                console.error("Register error: ", error);
                alert("Registeration failed. Please try again.");
              })
              .finally(() => {
                setLoading(false);
              });
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <>   
        <div className = "imp-info">  

<h2 className="head">IMP : Login and Register may take 30sec to 1 min to login </h2>
<h3>Default Login Credential</h3>
<h3>Email: tanish@gmail.com</h3>
<h3>Password: tanish</h3>
</div>
        <section  style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '110vh',
        }}>
            <div className="register">
                <div >
                    <h2>Sign Up</h2>
                    <span>register and enjoy the service</span>
        <form id='form' className='flex flex-col'>
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="btn" onClick={register} >{loading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <div>Register</div>
                )}
                </div>
            <div>or</div>
            <div className="btn" onClick={() => navigate('/login')}>Login</div>
        </form>
        
        </div>
          
        </div>
    </section>
              </>
    )
}

export default Register