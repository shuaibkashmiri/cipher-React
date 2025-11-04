import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Authorized from '../auth/Authorized'
const UserDashboard = () => { 

  Authorized()
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
const [image,setImage]=useState("")
  const getUserDetails=async()=>{
    const url="http://localhost:5000/api/auth/userdetails"
    const token=localStorage.getItem("token")
    try {
      const res=await axios.get(url,{headers:{Authorization:token}})
      console.log(res.data)
      // await localStorage.setItem("user",res.data.getUser)
      localStorage.setItem("user", JSON.stringify(res.data.getUser))
      setName(res.data.getUser.name)
      setEmail(res.data.getUser.email)
      setImage(res.data.getUser.profilePicture)

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
    <img src={image} className='profile' alt="" />  
    <p>Hello! {name} Welcome to Your Dashboard and your email is {email}</p>

    </div>
    </>
    
  )
}

export default UserDashboard
