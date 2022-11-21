import React, { useState } from 'react';
import {
    
    FaShoppingBag,
    FaUserFriends,
    FaLine,
    FaBars
    
}from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/ecommerce",
            name:"Ecommerce",
            icon:<FaShoppingBag/>
        },
        {
            path:"/employee",
            name:"Employees",
            icon:<FaUserFriends/>
        },
        
        {
            path:"/lines",
            name:"Lines",
            icon:<FaLine/>
    }
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Shopsy</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} className="link" activeclassName="active" end>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;