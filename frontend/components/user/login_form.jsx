import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.demoUser = this.demoUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.closeModal())
  }

  demoUser() {
    const user = { email: 'Admin@admin.com', password: '@Admin'}
    this.props.login(user).then(this.props.closeModal)
  }

  render() {
    return (
      <div className='modal-display' onClick={ e => e.stopPropagation()}>
        <div className='modal-signup-register'>
          <div className='modal-sign-in-text'>Sign In</div>
          <button className='modal-register-button' onClick={() =>this.props.otherForm('signup')}>Register</button>
        </div>
        <form>
          <div>
            <label className='modal-sign-in-email'>Email Address</label> <br />
            <input 
              type="text" 
              name='Email Address'
              placeholder="enter email"
              className='form-field'
              onChange={this.handleChange('email')}
            />
            </div>
            <div>
              <label className='modal-sign-in-password'>Password</label> <br />
              <input 
                type="password" 
                name='Password'
                placeholder="enter password"
                className='form-field'
                onChange={this.handleChange('password')}
              />
            </div>
            <br />
            <button className='modal-sign-in-button'>Sign In</button>
        
          </form>   
          <button className='modal-demo-button' onClick={this.demoUser}>Demo</button>
          
      </div>
    )
  }
}

export default LoginForm;