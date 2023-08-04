import {Component} from 'react'
import LoginContext from '../../Context'
import { Redirect } from 'react-router-dom'
import './Login.css'

class LoginForm extends Component {

  // make component as functional component and use context

  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    userLoginId:''
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  
  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="email"
        />
      </>
    )
  }

  renderLogin=()=>(
  
      <LoginContext.Consumer>
        {
          value=>{
            const {showSubmitError,errorMsg,userLoginId}=this.state
            const {setUserId,setAdminUserOrNot,adminUserOrNot}=value

            console.log(adminUserOrNot)

           const submitForm = async e => {
              e.preventDefault();
              
              const { username, password } = this.state;
              
              const {history}=this.props
              const queryParams = `email=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
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
                  if (data.get_user_id.length>0){
                    history.replace('/home')
                    setUserId(data.get_user_id[0].id)
                    this.setState({userLoginId:data.get_user_id[0].id})
                    this.setState({showSubmitError:false})
                  }else{
                    this.setState({showSubmitError:true})
                    this.setState({errorMsg:'username or password did not match'})
                  }
                  
                  setAdminUserOrNot(username==='admin@gmail.com'&&password==='Admin@123')
                  console.log(adminUserOrNot)

                  
            }


            if (userLoginId !== '') {
              return <Redirect to="/home" />
            }
          


            return(
              <div className="login-form-container">
                    
                    <img
                      src="https://pinscale.in/images/header-illustration_v5-2-p-800.png"
                      className="login-img"
                      alt="website login"
                    />
                    <form className="form-container" onSubmit={submitForm}>
                      <img
                        src="https://pinscale.in/images/Frame-4-1_1.svg"
                        className="login-website-logo-desktop-img"
                        alt="website logo"
                      />
                      <div className="input-container-1">{this.renderUsernameField()}</div>
                      <div className="input-container-1">{this.renderPasswordField()}</div>
                      <button type="submit" className="login-button">
                        Login
                      </button>
                      {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                    </form>
                  </div>
            )
          }
        }

      </LoginContext.Consumer>
    
  )

  render() {
    return (
       this.renderLogin()
    )
  }


}

export default LoginForm





// setUserId(data[0].user_id)

// setAdminUserOrNot(username==='admin@gmail.com'&&password==='Admin@123')
                  