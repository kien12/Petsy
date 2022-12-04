import React from 'react';
import HeroBanner from './hero_banner'

class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    return(
      <div>
        <div className='ketsy-welcome'>
          Welcome to Ketsy!
        </div>
        <HeroBanner/>
        <p className='ketsy-welcome'> Our top picks for you</p>
        <div className='top-picks-container'>
            aaaaaa
        </div>
      </div>
    )
  }
 
}

export default Splash;