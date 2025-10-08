import React, { Fragment, useState } from 'react'
import NameCard from './sharedComponents/NameCard'

const Home = () => {
const [count,setCount]=useState(0)



  const handleCount=()=>{
    setCount(count+1)
  }
  

  return (
    <>
    <div className='home'>
       {/* <h1>Count is {count}</h1>
       <button onClick={handleCount}>increase count</button> */}

       <NameCard name={"inan"} role={"Mern Stack Developer"} image={"https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="}/>
       <NameCard name={"Aqeel"} role={"Software Developer"} image={"https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"}/><br />
       <NameCard name={"Afnan"} role={"Backend Developer"} image={"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"}/>

      </div>
    
    </>
      
      

   
  )
}

export default Home
