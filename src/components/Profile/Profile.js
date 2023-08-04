import React, { Component } from 'react';
import './index.css'
import Sidebar from '../Sidebar';
import Navbar from '../NavBar';
import Header from '../Header';
import LoginContext from '../../Context';



class Profile extends Component{
  state={profileObject:[]}


  componentDidMount(){
    this.getUserProfile()
  }

   getUserProfile=async()=>{

    

    const url='https://bursting-gelding-24.hasura.app/api/rest/profile'
    const options={
        method:'GET',
        headers:{
            'x-hasura-admin-secret': 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        }
    }
    const response=await fetch(url,options)
    const data=await response.json()

    
   this.setState({profileObject:data.users})
    
  }

  renderProfile=()=>{
    return(
    <LoginContext.Consumer>
      {
        value=>{
          const {userId}=value
          const {profileObject}=this.state
          console.log(userId)
          let singUser=profileObject.filter(each=>each.id===userId)
          singUser=singUser[0]
          
          console.log(singUser)
          
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
                  <div  className='input-bar' id='code' ><p className='paragraph-input'>{singUser&&singUser.name}</p></div>
        
        
                  <lable className='label' for='mail'>Email</lable>
                  <div  className='input-bar' id='code' ><p className='paragraph-input'>{singUser&&singUser.email}</p></div>
        
                  <lable className='label' for='dob'>Date of Birth</lable>
                  <div  className='input-bar' id='code' ><p className='paragraph-input'>{singUser&&singUser.date_of_birth}</p></div>
        
                  <lable className='label' for='address'>Permanent Addres</lable>
                  <div  className='input-bar' id='code' ><p className='paragraph-input'>San Jose, California, USA</p></div>
        
        
                  <lable className='label' for='code'>Postal Code</lable>
                  <div  className='input-bar' id='code' ><p className='paragraph-input'>45962</p></div>
        
        
        
        
                </div>
        
                <div className='detailes-card'>
                  <lable className='label' for='user-name'>User Name</lable>
                  <div  className='input-bar' id='code' ><p className='paragraph-input'></p>{singUser&&singUser.name}</div>
         
                  <lable className='label' for='mail'>Password</lable>
                  <div  className='input-bar' id='code' ><p className='paragraph-input'>**********</p></div>
        
        
                  <lable className='label' for='dob'>Present Address</lable>
                  <div  className='input-bar' id='code' ><p className='paragraph-input'>San Jose, California, USA</p></div>
        
        
                  <lable className='label' for='address'>City</lable>
                  <div  className='input-bar' id='code' ><p className='paragraph-input'>San Jose</p></div>
        
                  <lable className='label' for='code'>Country</lable>
                  <div  className='input-bar' id='code' ><p className='paragraph-input'>USA</p></div>
        
        
        
        
                </div>
             
            </div>
                         
        
        
                         
                            
                    
                    </div>
                    </div>
          )        

        }
      }
    </LoginContext.Consumer>
    )
  }

  
   

  render(){

    return(

 this.renderProfile()          
        

    
    
  )
}

}

export default Profile;
