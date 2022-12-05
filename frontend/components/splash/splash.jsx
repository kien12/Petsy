import React from 'react';
import HeroBannerContainer from './hero_banner_container'

class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log('splash props', this.props);
    return(
      <div>
        <div className='ketsy-welcome'>
          Welcome to Ketsy!
        </div>
        <HeroBannerContainer/>
        <p className='ketsy-welcome'> Our top picks for you</p>
        <div className='top-picks-container'>
            aaaaaa
        </div>
      </div>
    )
  }
 
}

export default Splash;