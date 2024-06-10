import React from 'react'
import '../Top Section/top.scss'
import '../../Body Section/App.css'
//imported icons from react icons
import {BsSearch} from 'react-icons/bs'
import {TbMessageCircle2} from 'react-icons/tb'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BsArrowRightShort} from 'react-icons/bs'

//imported image===>
import img from '../../Assets/user.avif'
import img2 from '../../Assets/OrthoRaksha-Tabs.webp'
//imported video===>
import video from '../../Assets/VideoMedicine.mp4'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
       
          <h1>Welcome to Admin Dashboard</h1>
          <p>Hello admin, Welcome back!!</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder='Search '/>
          <BsSearch className="icon"/>
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle2 className="icon"/>
          <IoMdNotificationsOutline className="icon"/>
          <div className="adminImage">
            <img src={img} alt="admin Image" />
          </div>
        </div>
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary ayurvedic medicines!</h1>
          <p>Ayurvedic Medicines are very Natural made products</p>
          <div className="buttons flex">
          <button className='btn'>Explore</button>
          <button className='btn transparent'>Top Sellers</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
            <h1>My Status</h1>
            <div className="flex">
              
            <span>
                Today <br/> <small>4 Orders</small>
              </span>
              <span>
                This month <br/><small>100 Orders</small>
              </span>
              <span className="flex link">
              Go to my orders<BsArrowRightShort className="icon"/>
            </span>
            </div>
            </div>
           <div className="imgDiv">
            <img src={img2} alt="Image Name" />
           </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top