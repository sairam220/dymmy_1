import React, { Component } from 'react';
import Popup from 'reactjs-popup'

import {FaUserAlt} from 'react-icons/fa'
import {BiTransfer} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import { NavLink } from 'react-router-dom';

import './index.css'


import {
   
    LogoutButton,
   
    ModalContainer,
    CloseButton,
    ConfirmButton,
    ModalDesc,
    ButtonsContainer,
  } from './styledComponents'
import { useHistory } from 'react-router-dom';
  
const menuItem=[
    {
        path:"/home",
        name:"Dashboard",
        icon:<AiFillHome/>
    },
    {
        path:"/all-transactions",
        name:"Transactions",
        icon:<BiTransfer/>
    },
    
    
    {
        path:"/profile",
        name:"Profile",
        icon:<FaUserAlt/>
    },
    
]

class Sidebar extends Component{
    state={arrayObjects:menuItem,isOpen:true}
    
     
    

     

    render(){

    return (
        <div className="container">
            
                 
                  <div className="top_section">
                  
               <img src='https://res.cloudinary.com/dmov4v1ui/image/upload/v1690789046/Frame_507_fthrk4.png' alt='sidbar'/>
                   
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
                <LogoutButton type="button">
                  <FiLogOut/>
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure you want to Logout?</ModalDesc>
                  <ModalDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </ModalDesc>
                  <ButtonsContainer>
                    <button
                      type="button"
                      className='button-1'
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                 <NavLink to='/login'>
                    <ConfirmButton type="button">
                      Confirm
                    </ConfirmButton>
                    </NavLink>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            </div>
                
            </div>
               
           </div>
           
          
       
    );
}

}

export default Sidebar;