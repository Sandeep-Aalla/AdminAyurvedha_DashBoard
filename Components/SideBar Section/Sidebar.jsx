import React from 'react'
import './sidebar.scss'
//import '../Body Section/App.css'
//improted logo images from assets folder
import logo from './../Assets/logo.jpg'
//imported icons from react icons 
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front,BsQuestionCircle} from 'react-icons/bs'
import { BrowserRouter, Link, NavLink, Route, Router,Routes,Switch } from 'react-router-dom'
import Body from '../Body Section/Body';

const Sidebar = () => {
  return (
    <div><Body />
    <div className='sideBar grid'>
   
      <div className="logoDiv flex">
      
        <img src={logo} alt="Image Name" />
       
        <h2>Medicines.</h2>
      </div>
      <div className="menuDiv">
        <h3 className='divTitle'>
           QUICK MENU
        </h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/" className='menuLink flex'>
              <IoMdSpeedometer className="icon" />
              <span className='smallText'>
                Dashboard
              </span>
            </Link>
          </li>

          <li className="listItem">
             <Link to="/customers" className='menuLink flex'>
              <MdDeliveryDining className="icon" />
              <span className='smallText'>
                Customers
              </span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="/CategoryList" className='menuLink flex'>
              <MdOutlineExplore className="icon" />
              <span className='smallText'>
                Categories
              </span>
            </Link>
          </li>
          <li className="listItem">
            <Link to="/MedicineList" className='menuLink flex'>
              <MdProductionQuantityLimits className="icon" />
              <span className='smallText'>
                 Medicines
              </span>
            </Link>
          </li>
          <li className="listItem">
          <Link to="/OrderComponent" className='menuLink flex'>
            <MdProductionQuantityLimits className="icon" />
            <span className='smallText'>
              Orders
            </span>
          </Link>
        </li>
        </ul>
      </div>
      <div className="settingsDiv">
        <h3 className='divTitle'>
           SETTINGS
        </h3>

        <ul className="menuLists grid">
         <li className="listItem">
            <a href='./Login' className='menuLink flex'>
             <button type="submit" className='btn'>Logout</button>
            </a>

          </li>
        </ul>
      </div>
      <div className="sideBarCard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <h3>Help Center</h3>
          <p>Having trouble in Medicines, Please contact us from for more questions</p>
          <button className='btn'>Go to help center</button>
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default Sidebar