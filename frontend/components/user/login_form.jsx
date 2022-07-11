import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <div className='modal-signup-register'>
          <div>Sign In</div>
          <button>Register</button>
        </div>
        <form>
          <label>Email Address</label>
          <input 
            type="text" 
            name='Email Address'
          />
          <label>Password</label>
          <input 
            type="password" 
            name='Password'
          />
          <button>Sign In</button>
          </form>   
      </div>
    )
  }
}

export default LoginForm;