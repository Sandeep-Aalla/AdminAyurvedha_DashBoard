import React from 'react'
import './body.scss'
import '../Body Section/App.css'
import Top from './Top Section/Top'
import Listing from './Listing Section/Listing'
import Activity from './Activity Section/Activity'
import img from '../Assets/wall5.avif'
const Body = () => {
  return (
    <div className="mainContent">
      <Top/>
      <div>
      <img src={img} alt="Image Name" className="wall"/>
      </div>
      <div className="bottom flex">
       <Listing/>
       <Activity />
    </div>
    </div>
  )
}

export default Body