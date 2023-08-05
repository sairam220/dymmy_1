import React, { Component } from 'react';
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaUserAlt} from 'react-icons/fa'
import {RiMoneyDollarBoxFill} from 'react-icons/ri'
import {AiFillHome,AiOutlineClose} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import { NavLink } from 'react-router-dom';

import './index.css'


import {
   
    LogoutButton,
   

  } from './styledComponents'
  
const menuItem=[
    {
        
        path:"/home",
        name:"Dashboard",
        icon:<AiFillHome/>,
        clicked:false
    },
    {
        id:2,
        path:"/all-transactions",
        name:"Transactions",
        icon:<RiMoneyDollarBoxFill/>,
        clicked:false
    },
    
    
    {
        id:3,
        path:"/profile",
        name:"Profile",
        icon:<FaUserAlt/>,
        clicked:false
    },
    
]

class Sidebar extends Component{
    state={arrayObjects:menuItem,isOpen:true}
    
     logout=()=>{
        localStorage.removeItem('user_id')
        Cookies.remove('jwt_token')
    }

    
    

     

    render(){

    return (
        <div className="container">
            
                 
                  <div className="top_section">
                  
               <img className='sidebar-image' src='https://res.cloudinary.com/dmov4v1ui/image/upload/v1690789046/Frame_507_fthrk4.png' alt='sidbar'/>
                   
               </div>
               
               {
                   this.state.arrayObjects.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: this.state.isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <div className="link logout" >
                <img src='https://res.cloudinary.com/dmov4v1ui/image/upload/v1690812395/Avatar_yxvjco.png' alt='profile'/>
                <div>
                    <p className='para1'>Rhye</p>
                    <p className='para2'>olivia@untitledui.com</p>
                </div>
                    <div className="icon">

                    

            <Popup
      modal
      trigger={
       
        <LogoutButton type="button" className='button'>
                  <FiLogOut/>
                </LogoutButton>
       
      }
    >
      {close => (
        <div className='delete-pop-up'>

          <div className='contaner-popup'>
            <img src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1691075805/log-out-01_uzh8pg.png" className='popup-image' alt='delete'/>
          </div>


            <div>
          <h1 className='delete-heading'>Are you sure you want to Logout?</h1>
          <p className='delete-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
          
          <div className='btn-container'>
            <NavLink to='/login'>
          <button className='delete-button-12' type="button" onClick={this.logout}>
          Yes, Logout
            </button>
            </NavLink>
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
              className='cancel-button'
            >
              Cancel
            </button>
         
            
            
          </div>
        </div>
        <AiOutlineClose onClick={() => close()} className='delete'/>
        </div>
      )}
    </Popup>






            
            </div>
                
            </div>
               
           </div>
           
          
       
    );
}

}

export default Sidebar;