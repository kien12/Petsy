import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className="about-container">
      <h1>What is Ketsy?</h1>
      <div className='about-block-container'>
        <div className='about-block'>
          <h2 className='about-header'>header</h2>
          <p className='about-details'>details</p>
        </div>
        <div className='about-block'>
          <h2 className='about-header'>header</h2>
          <p className='about-details'>details</p>
        </div>
        <div className='about-block'>
          <h2 className='about-header'>header</h2>
          <p className='about-details'>details</p>
        </div>
      </div>
    </div>      
    )
  }
}

export default About;