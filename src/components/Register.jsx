import React, { useState } from 'react'
import axios from 'axios'
import{toast,ToastContainer} from "react-toastify"
import { Link } from 'react-router-dom'

const Register = () => {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [profilePicture,setProfilePicture]=useState(null)
const [message,setMessage]=useState("")




const formData=new FormData()
formData.append("name",name)
formData.append("email",email)
formData.append("password",password)
formData.append("profilePicture",profilePicture)




const handleSubmit=async(e)=>{
  e.preventDefault();
  const url="http://localhost:5000/api/auth/register"
  try {
    const res =await axios.post(url,formData,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
if(res.status===201){
 toast.success(res.data.message)
}else{
  toast.error(res.data.message)
}
     

  } catch (error) {
    console.log(error)
  }
}




  return (
    <div className="auth-container">
      <ToastContainer/>
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create Account</h1>
          <p>Join us today and get started</p>
        </div>
        
        {message && <div className="message">{message}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input type='file' name='profilePicture' onChange={(e)=>setProfilePicture(e.target.files[0])}></input>
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name"
              placeholder='Enter your full name' 
              value={name} 
              onChange={(e)=>setName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email"
              placeholder='Enter your email' 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder='Create a strong password' 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="auth-button">
            Create Account
          </button>
          
          <div className="auth-footer">
            <span>Already have an account? <Link className='auth-link' to={"/login"}>Sign in</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
