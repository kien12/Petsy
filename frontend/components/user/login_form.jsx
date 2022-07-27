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
          <button className='modal-register-button'>Register</button>
        </div>
        <form>
          <div>
            <label className='modal-sign-in-email'>Email Address</label> <br />
            <input 
              type="text" 
              name='Email Address'
            />
            </div>
            <div>
              <label className='modal-sign-in-password'>Password</label> <br />
              <input 
                type="password" 
                name='Password'
              />
            </div>
            <br />
            <button className='modal-sign-in-button'>Sign In</button>
          </form>   
          <button className='modal-demo-button'>Demo</button>
          
      </div>
    )
  }
}

export default LoginForm;