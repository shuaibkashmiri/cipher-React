import React, { useState } from 'react'
import axios from 'axios'
import{toast,ToastContainer} from "react-toastify"
import { Link } from 'react-router-dom'

const Register = () => {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [message,setMessage]=useState("")




const formData={
  name,email,password
}


const handleSubmit=async(e)=>{
  e.preventDefault();
  const url="http://localhost:5000/api/auth/register"
  try {
    const res =await axios.post(url,formData)
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
   <>
    <div className='register'>
      <ToastContainer/>
      <div className='innerReg'>
<h1>Register</h1>
<p>{message}</p>
<form onSubmit={handleSubmit}>
  <label htmlFor="">Name</label>
  <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
  <label htmlFor="">Email</label>
  <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <label htmlFor="">
    Password
  </label>
  <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
  <input type="submit" value={"Register"} />
   <span>Already a User <Link className='link' to={"/login"}>Login</Link></span>
</form>
 
      </div>



    </div>
   </>
  )
}

export default Register
