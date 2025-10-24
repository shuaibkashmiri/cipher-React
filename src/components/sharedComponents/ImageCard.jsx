import React from 'react'

const ImageCard = (props) => {
  return (
    <>
    <div className='imageCard'>
      <img src={props.image} alt="" />
      <h3>Title {props.title}</h3>
      <p>{props.desc}</p>
      
    </div>
    </>
    
  )
}

export default ImageCard
