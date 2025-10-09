import React, { Fragment, useState } from 'react'
import ImageCard from './sharedComponents/ImageCard'
import axios from "axios"

const Home = () => {

  const [images,setImages]=useState([])
  const [loading,setLoading]=useState(false)

  const fetchImages=async()=>{
       const API_KEY = 'AR6IwmyLUc6VPbxRqnJxtBmOpsQfzjpfaDqapwEIrsdJkj1Taf6DaZcw';
    const url = 'https://api.pexels.com/v1/curated?per_page=12';
    try {
        setLoading(true)
      const res=await axios.get(url,{ headers: {
          Authorization: API_KEY,
        },})
        setImages(res.data.photos)
        console.log(images)
        // console.log(res.data.photos)
      
    } catch (error) {
      console.log(error)
      setLoading(false)
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
    <button onClick={fetchImages}>Get Images</button>
    <div className='home'>
    {images.map((photo)=><ImageCard image={photo.src.medium} photographer={photo.photographer} desc={photo.alt}/>)}
        </div>
    
    </>
      
      

   
  )
}

export default Home
