import React from 'react'
import './listing.scss'
//imported icons==>
import {BsHeart} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
//imported images==>
import img from '../../Assets/OrthoRaksha-Tabs.webp'
import img2 from '../../Assets/medicinepng.jpeg'
import img3 from '../../Assets/medicine(3).png'
import img4 from '../../Assets/medicine(4).webp'
const Listing = () => {
  return (
    <div className='listingSection'>
     <div className="heading flex">
       <h1>My Prodcuts</h1>
       <button className='btn flex'>
       See All <BsArrowRightShort className="icon"/>
       </button>
     </div>
   <div className="secContainer flex">
    <div className="singleItem">
      <BsHeart className="icon"/>
      <img src={img} alt="Image Name" />
      <h3>Ortho-Raksha</h3>
    </div>

    <div className="singleItem">
      <BsHeart className="icon"/>
      <img src={img2} alt="Image Name" />
      <h3>Agnitundi</h3>
    </div>

    <div className="singleItem">
      <BsHeart className="icon"/>
      <img src={img3} alt="Image Name" />
      <h3>Divya Medicine</h3>
    </div>

    <div className="singleItem">
      <BsHeart className="icon"/>
      <img src={img4} alt="Image Name" />
      <h3>Matsya-Veda</h3>
    </div>
   </div>
    </div>
  )
}

export default Listing