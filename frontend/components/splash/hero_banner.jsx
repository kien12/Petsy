import React from 'react'

class HeroBanner extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    
    return(
      <div className='hero-block-upper-container'>
        <div className='hero-block-large'>
          <h2>
            Standing out just got so easy.
          </h2>
          <h2>image</h2>
        </div>
      </div>
    )
  }
}

export default HeroBanner;