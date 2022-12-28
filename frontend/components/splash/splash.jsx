import React from 'react';
// import { fetchAllProducts } from '../../actions/product_actions';
import HeroBannerContainer from './hero_banner_container'

class Splash extends React.Component {
  constructor(props){
    super(props)
  }
  
  // componentDidMount() {
    // this.props.fetchAllProducts();
  // }
  

  render() {
    console.log('splash props', this.props);
    console.log('splash state', this.state)
    return(
      <div >
        <div>
          <div className='ketsy-welcome'>
            {/* Capture your moment on the wall! */}
            {/* <HeroBannerContainer/> */}
          </div>
        </div>
        <div className='top-picks-container'>
          <p className='ketsy-welcome'> Our top picks for you</p>
        </div>
      </div>
    )
  }
 
}

export default Splash;