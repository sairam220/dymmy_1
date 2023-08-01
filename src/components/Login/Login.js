import React, { Component } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import './Login.css'

class Login extends Component{
  state = {
    email: '',
    password: '',
    error: '',
  };

  handleLogin = async (e) => {
     e.preventDefault();
    const { email, password } = this.state;
    
    const {history}=this.props
    const queryParams = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
        const url = `https://bursting-gelding-24.hasura.app/api/rest/get-user-id?${queryParams}`
        const options = {
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json',
            'x-hasura-admin-secret': 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
          },
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok){
          history.replace('/home')
        }
    };

     
render(){

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://pinscale.in/images/header-illustration_v5-2-p-800.png' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <img src='https://pinscale.in/images/Frame-4-1_1.svg' alt='pinscale'/>     
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Login into your account</h5>
              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg1' type='email' size="lg" onChange={(e) => this.setState({ email: e.target.value })}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => this.setState({ password: e.target.value })}/>
              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={this.handleLogin}>Login</MDBBtn>
             </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

}

export default Login;