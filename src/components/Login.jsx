import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'
const Login = () => {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
const navigate=useNavigate()
    const formData={
        email,password
    }

const handleSubmit=async(e)=>{
    e.preventDefault()
    const url="http://localhost:5000/api/auth/login"
    const res=await axios.post(url,formData)
    if(res.data.message === "User Logged in Successfully"){
        toast.success(res.data.message)
        localStorage.setItem("token",res.data.token)
        navigate("/dashboard")
    }else{
        toast.error(res.data.message)
    }
    
    console.log(res.data);
    
    try {

        
    } catch (error) {
        console.log(error)
    }
}


  return (
    <div className="auth-container">
      <ToastContainer/>
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
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
              placeholder='Enter your password' 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="auth-button">
            Sign In
          </button>
          
          <div className="auth-footer">
            <span>Don't have an account? <Link className='auth-link' to={"/register"}>Sign up</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
