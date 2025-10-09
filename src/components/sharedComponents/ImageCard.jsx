import React from 'react'

const ImageCard = (props) => {
  return (
    <>
    <div className='imageCard'>
      <p>{props.photographer}</p>
      <img src={props.image } alt="" />
      <p>{props.desc}</p>
      
    </div>
    </>
    
  )
}

export default ImageCard
