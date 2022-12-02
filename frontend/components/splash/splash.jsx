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
      </div>
    )
  }
 
}

export default Splash;