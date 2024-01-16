import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate  } from "react-router-dom"
import '../../pages/forms.css'
import { useEffect } from "react"
   export const Login = ({ setLoginUser}) => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
   
    const login = () => {
        setLoading(true);
        axios.post("https://fitness-back-5jw0.onrender.com/login", user)
        .then(res => {
          
            alert(res.data.message)
            localStorage.setItem('name',res.data.user.name);
            localStorage.setItem('logout','Logout');
            setLoginUser(res.data.user)
            localStorage.setItem('login',true);
            localStorage.setItem('user_data',res.data.user);
            navigate('/')

        }).catch((error) => {
            console.error("Login error: ", error);
            alert("Login failed. Please try again.");
          })
          .finally(() => {
            setLoading(false);
          });
    }
    useEffect(() => {
      let login = localStorage.getItem('login');
      if(login)
      navigate('/');
    
      
    });
    

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
            height: '80vh',
        }}>
           
            <div className="register">
                <div >
           
                    <span>login and enjoy the service</span>
        <form id='form' className='flex flex-col'>
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="btn" onClick={login}> {loading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <div>Login</div>
                )}</div>
            <div>or</div>
            <div className="btn" onClick={() => navigate('/register')}>Register</div>
        </form>
        </div>
          
          </div>
      </section>
              </>
    )
}

export default Login