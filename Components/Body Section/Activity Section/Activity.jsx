import React from 'react'
import './activity.css'
import '../../Body Section/App.css'
import img from '../../Assets/wall6.avif'
const Activity = () => {
  return (
    <div className='newContent'>
      <h2>New Product</h2>
      <img src={img} alt="Image Name" />
    </div>
  )
}

export default Activity