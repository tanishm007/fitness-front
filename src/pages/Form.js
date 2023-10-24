import React, { useState } from 'react'
import bgImg from '../assets/images/register_img.jpg';
import { useForm } from 'react-hook-form';
import './forms.css'



    export function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    const [user, setUser] = useState({
        name : "" , email: "" , phone: "", password:"",cpassword:""
    });

    let name , value
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
    }
 
    // console.log(watch('username'));


    
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

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                 {/*    <input type="text" {...register("username")} placeholder='username' /> */}
                    <input type="email" name = "name" id= "name"  
                    value = {user.name}
                    onChange = {handleInputs}
                    placeholder = "Your Name"
                    
                     />
                    <input type="email" name = "email" id= "email"  
                    value = {user.email}
                    onChange = {handleInputs}
                    placeholder = "Your Email"
                    
                     />
                    <input type="text" name = "password" id= "password"  
                    value = {user.password}
                    onChange = {handleInputs}
                    placeholder = "Password"
                    
                     />
                    <input type="text" name = "cpassword" id= "cpassword"  
                    value = {user.cpassword}
                    onChange = {handleInputs}
                    placeholder = "confirm Password"
                    
                     />
                    <input type="number" name = "phone" id= "phone"  
                    value = {user.phone}
                    onChange = {handleInputs}
                    placeholder = "Mobile No."
                    
                     />
              {/*       <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"} */}
                     
                    <button className='btn'>Sign In</button>
                    <button className='btn'>Register</button>
                  
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Form;