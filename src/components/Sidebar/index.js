import React, { useState } from 'react';
import Popup from 'reactjs-popup'

import {
    
    FaBars,
    
}from "react-icons/fa";
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
  

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
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

    const onClickLogout=()=>{
         const history=this.props
         history.push('/')
    }

    return (
        <div className="container">
            
                 
                  <div className="top_section">
                  
               <img src='https://res.cloudinary.com/dmov4v1ui/image/upload/v1690789046/Frame_507_fthrk4.png' alt='sidbar'/>
                   
               </div>
               
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <div to='/login'  className="link logout" >
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
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                 <NavLink to='/login'>
                    <ConfirmButton type="button" onClick={onClickLogout}>
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
};

export default Sidebar;