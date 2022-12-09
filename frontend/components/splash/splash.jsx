import React from 'react';
import HeroBannerContainer from './hero_banner_container'

class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  

  render() {
    console.log('splash props', this.props);
    return(
      <div >
        <div>
          <div className='ketsy-welcome'>
            Capture your moment on the wall!
          </div>
          <HeroBannerContainer/>
        </div>
        <div className='top-picks-container'>
          <p className='ketsy-welcome'> Our top picks for you</p>
        </div>
      </div>
    )
  }
 
}

export default Splash;