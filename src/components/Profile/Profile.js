import React from 'react';
import './index.css'
import Sidebar from '../Sidebar';
import Navbar from '../NavBar';



const Profile = () => {
  
  const user = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'john.doe@gmail.com',
    dateOfBirth: '1990-01-01',
  };

  return (
   
    <div className="home-container">
                <Sidebar/>
                <div>
                <Navbar/>
                <div className="credit-debit-container">
                 <div className="profile-container">
      
      <div>
        <img src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690788690/pexels-christina-morillo-1181690_1_n1gs6c.png" alt="Profile" className='profile-image'/>
        <h3>Name: {user.name}</h3>
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Date of Birth: {user.dateOfBirth}</h3>
     
    </div>
                 


                 
                    
            
            </div>
            </div>
            </div>
            </div>
        

    
    
  );
};

export default Profile;
