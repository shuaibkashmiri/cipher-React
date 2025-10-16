import React, { useEffect, useState } from 'react'
import axios from 'axios'
const UserDashboard = () => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")

  const getUserDetails=async()=>{
    const url="http://localhost:5000/api/auth/userdetails"
    const token=localStorage.getItem("token")
    try {
      const res=await axios.get(url,{headers:{Authorization:token}})
      console.log(res.data)
      setName(res.data.getUser.name)
      setEmail(res.data.getUser.email)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUserDetails()
  },[])
  return (
    <>
    <div className='dash'>
    <h1>User Dashboard</h1>  
    <p>Hello! {name} Welcome to Your Dashboard and your email is {email}</p>

    </div>
    </>
    
  )
}

export default UserDashboard
