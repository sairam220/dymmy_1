import React from 'react';
import './index.css'
import Sidebar from '../Sidebar';
import Navbar from '../NavBar';
import Header from '../Header';



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
                <Header/>
                <div>
                <Navbar/>
                
      
      <div className='profile-container' >
        <img src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690788690/pexels-christina-morillo-1181690_1_n1gs6c.png" alt="Profile" className='profile-image'/>
        <div className='detailes-card'>
          <lable className='label' for='name'>Your Name</lable>
          <input typr="text" className='input-bar' id='name' value={user.name}/>
          
          <lable className='label' for='mail'>Email</lable>
          <input typr="text" className='input-bar' id='mail' value={user.email}/>


          <lable className='label' for='dob'>Date of Birth</lable>
          <input typr="text" className='input-bar' id='dob' value={user.dateOfBirth}/>


          <lable className='label' for='address'>Permanent Addres</lable>
          <input typr="text" className='input-bar' id='address' value='San Jose, California, USA'/>

          <lable className='label' for='code'>Postal Code</lable>
          <input typr="text" className='input-bar' id='code' value='45962'/>




        </div>

        <div className='detailes-card'>
          <lable className='label' for='user-name'>User Name</lable>
          <input typr="text" className='input-bar' id='name' value={user.name}/>
          
          <lable className='label' for='mail'>Password</lable>
          <input typr="text" className='input-bar' id='mail' value='**********'/>


          <lable className='label' for='dob'>Present Address</lable>
          <input typr="text" className='input-bar' id='dob' value='San Jose, California, USA'/>


          <lable className='label' for='address'>City</lable>
          <input typr="text" className='input-bar' id='address' value='San Jose'/>

          <lable className='label' for='code'>Country</lable>
          <input typr="text" className='input-bar' id='code' value='USA'/>




        </div>
     
    </div>
                 


                 
                    
            
            </div>
            </div>
            
        

    
    
  );
};

export default Profile;
