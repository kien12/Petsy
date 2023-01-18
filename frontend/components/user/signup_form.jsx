import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.closeModal())
      .then(this.window.reload)
  }


  render() {
    return (
      <div className='modal-display' onClick={ e => e.stopPropagation()}>
        <div className='modal-register-signup'>
          <div className='modal-register-text' >Register</div>
          <button className='modal-signin-button' onClick={() => this.props.otherForm('login')}>Sign In</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label className='modal-sign-in-email'>Name</label> <br />
            <input 
              type="text" 
              name='Name'
              placeholder="enter name"
              className='form-field'
              value={this.state.username}
              onChange={this.onChange('username')}
            />
            <label className='modal-sign-in-email'>Email Address</label> <br />
            <input 
              type="text" 
              name='Email'
              placeholder="enter email"
              className='form-field'
              value={this.state.email}
              onChange={this.onChange('email')}
            />
            </div>
            <div>
              <label className='modal-sign-in-password'>Password</label> <br />
              <input 
                type="password" 
                name='Password'
                placeholder="enter password"
                className='form-field'
                value={this.state.password}
              onChange={this.onChange('password')}
              />
            </div>
            <br />
            <button className='modal-sign-in-button'>Register</button>
        
          </form>   
          
          
      </div>
    )
  }
}

export default SignupForm;