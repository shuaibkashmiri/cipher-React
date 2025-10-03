import React, { Fragment, useState } from 'react'

const Home = () => {
const [count,setCount]=useState(0)



  const handleCount=()=>{
    setCount(count+1)
  }
  

  return (
    <>
    <div className='home'>
       <h1>Count is {count}</h1>
       <button onClick={handleCount}>increase count</button>
      </div>
    
    </>
      
      

   
  )
}

export default Home
