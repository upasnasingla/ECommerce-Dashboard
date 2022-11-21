import React, { useState } from 'react'

import { 
  FaCommentDots,
  FaCartPlus,
  FaRegBell

 } from 'react-icons/fa';
 import Sidebar from './Sidebar';
  import Home from './Home';
import Home1 from './Home1';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  


  return (
    <>
      
      <div className="nav">
        <div className='rightIcons'>
          <NavLink to="/comment" className='icons'><FaCommentDots/></NavLink>
          <NavLink to="/cart" className='icons'><FaCartPlus/></NavLink>
          <NavLink to="/notification" className='icons'><FaRegBell/></NavLink>
          <NavLink to="/login" className='icons' style={{width:100, height:30, backgroundColor:"lightgray"}}><button><span>Login</span></button></NavLink>
          
        </div>
      </div>
      <Sidebar/>
      
 



    </>
  )
 }

 export default Navbar
