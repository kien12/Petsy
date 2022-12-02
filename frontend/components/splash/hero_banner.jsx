import React from 'react'

class HeroBanner extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    
    return(
      <div className='hero-block-upper-container'>
        <div className='hero-block-large'>
          <h2 className='hero-moto'>
            Standing out just got so easy.
            <p className='sell-on-ketsy'>
              sell on Ketsy!
            </p>
          </h2>
          <img src={window.splashImage3} className='hero-main-image' />
        </div>
        <div className='hero-right-container'>
          <img src={window.splashImage4} className="hero-image-medium"/>
          <div className='hero-right-main-text'>
            #1 product
            <p className='hero-right-tiny-text'>
              idk to put here
            </p>
          </div>
          <p className='hero-shipping'>
            Free Shipping on everything!
          </p>
        </div>
      </div>
    )
  }
}

export default HeroBanner;