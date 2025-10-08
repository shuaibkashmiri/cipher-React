import React from 'react'

const NameCard = (props) => {
  return (
    <>
    <div className='namecard'>
      <img src={props.image} alt="" />
      <h1>My Name is {props.name}</h1>
      <h4>I am A {props.role}</h4>
    </div>
    </>
    
  )
}

export default NameCard
