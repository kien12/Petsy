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
            <h2 className='about-header'>
              A community doing good
            </h2>
            <p className='about-details'>
              Ketsy is a global online marketplace where people come together to
              create, sell, and buy art
            </p>
          </div>
        <div className='about-block'>
          <h2 className='about-header'>
            Support independent creators
          </h2>
          <p className='about-details'>
            There are no warehouses - just millions of people selling the things
            they love. The entire process is easy, helping you connect directly
            with the creators to find something amazing
          </p>
        </div>
        <div className='about-block'>
          <h2 className='about-header'>
            Peace of mind
          </h2>
          <p className='about-details'>
            Your privacy is very important to us. And if you ever need help,
            we're just an email away
          </p>
        </div>
      </div>
    </div>      
    )
  }
}

export default About;