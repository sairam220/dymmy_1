import {Component} from 'react'


import './Login.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
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

  submitForm = async e => {
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
        if (response.ok){
          history.replace('/home')
        }
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

  render() {
    const {showSubmitError, errorMsg} = this.state
    

    return (
      <div className="login-form-container">
        
        <img
          src="https://pinscale.in/images/header-illustration_v5-2-p-800.png"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://pinscale.in/images/Frame-4-1_1.svg"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
