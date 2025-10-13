import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'
const Login = () => {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const formData={
        email,password
    }

const handleSubmit=async(e)=>{
    e.preventDefault()
    const url="http://localhost:5000/api/auth/login"
    const res=await axios.post(url,formData)
    if(res.data.message === "User Logged in Successfully"){
        toast.success(res.data.message)
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
    <div>
       <div className='register'>
        <ToastContainer/>
      <div className='innerReg'>
<h1>Login to Your Account</h1>
<form onSubmit={handleSubmit}>
  <label htmlFor="">Email</label>
  <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
  <label htmlFor="">
    Password
  </label>
  <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
  <input type="submit" value={"Login"} />
  <span>Not a User <Link className='link' to={"/register"}>Register</Link></span>
</form>

      </div>



    </div>
    </div>
  )
}

export default Login
