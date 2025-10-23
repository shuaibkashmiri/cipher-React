import React, { useEffect, useState } from 'react'
import axios from "axios"
import {toast} from 'react-toastify'
const Home = () => {
const [title,setTitle]=useState("")
const [description,setDescription]=useState("")
const [image,setImage]=useState(null)
const [blogs,setBlogs]=useState([])

const formdata=new FormData()
formdata.append("title",title)
formdata.append("description",description)
formdata.append("image",image)


const createBlog=async(e)=>{
  e.preventDefault();
  try {
    const token = localStorage.getItem("token")
    const url="http://localhost:5000/api/blog/create"
 const res =await axios.post(url,formdata,{
      headers:{
        "Content-Type":"multipart/form-data",
        Authorization:token  
      }})
      console.log(res.data.message)

  } catch (error) {
    console.log(error)
  }
} 

const fetchBlogs=async()=>{
  try {
    const url="http://localhost:5000/api/blog/all"
    const res=await axios.get(url)
    setBlogs(res.data.blogs)
    console.log(blogs)
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  fetchBlogs()
},)
  return (

    <>
    <div className='home'>
      <div className="form-group">
       <form onSubmit={createBlog} className='blog-post'>
         <input type="file" name="image" onChange={(e)=>setImage(e.target.files[0])} />
        <input type="text" placeholder='Title' value={title} name='title' onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text"  placeholder='Description' value={description} name='description' onChange={(e)=>setDescription(e.target.value)}/>
        <input type="submit" name='Post' value="Post"/>
       </form>
      </div>
      <div className='blogs'>


      </div>
    </div>
    </>
    
  )
}

export default Home
