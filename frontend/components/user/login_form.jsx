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
      <div className='modal-display'>
        <div className='modal-signup-register'>
          <div className='modal-sign-in-text'>Sign In</div>
          <button>Register</button>
        </div>
        <form>
          <div>
            <label>Email Address</label> <br />
            <input 
              type="text" 
              name='Email Address'
            />
            </div>
            <div>
              <label>Password</label> <br />
              <input 
                type="password" 
                name='Password'
              />
            </div>
            <br />
            <button>Sign In</button>
          </form>   
          <button>Demo</button>
          
      </div>
    )
  }
}

export default LoginForm;