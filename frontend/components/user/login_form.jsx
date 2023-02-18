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
    const user = { email: 'vegeta@gmail.com', password: 'vegeta'}
    this.props.login(user).then(this.props.closeModal)
  }

  render() {
    // console.log('this.state', this.state)
    return (
      <div className='modal-display' onClick={ e => e.stopPropagation()}>
        <div className='modal-signup-register'>
          <div className='modal-sign-in-text'>Sign In</div>
          <button className='modal-register-button' onClick={() =>this.props.otherForm('signup')}>Register</button>
        </div>

        <form onSubmit={this.handleSubmit}>
            <label className='modal-sign-in-email'>Email Address
              <input 
                type="text" 
                name='Email Address'
                placeholder="enter email"
                className='form-field'
                value={this.state.email}
                onChange={this.handleChange('email')}
              />
            </label> <br />
            <label className='modal-sign-in-password'>Password
              <input 
                type="password" 
                name='Password'
                placeholder="enter password"
                className='form-field'
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
            </label> <br />
            <button className='modal-sign-in-button'>Sign In</button>
          </form>   
          
          <button className='modal-demo-button' onClick={this.demoUser}>Demo</button>
          
      </div>
    )
  }
}

export default LoginForm;