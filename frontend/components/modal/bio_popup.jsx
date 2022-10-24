import React from 'react'

class BioPopup extends React.Component {


    render() {
        return (
          <div>
            <div
              // className="bio-popup-overlay"
              className='bio-popup-overlay'
              onClick={this.props.togglePopup}
            >
            <div className={`bio-popup-text`}>
              <h3>Thank you for your interest in Petesy!</h3>
              <p className="bio">
                Petsy is a project by{" "}
                <span className="bio-name">Kien Nguyen</span>, a web developer and
                pet-lover from sunny California. To see more of his projects,
                please visit him{" "}
                <a href="https://kiennnguyen93.github.io/">
                  https://kiennnguyen93.github.io/
                </a>
                .
              </p>
              <p>
                The products on this site are for demo purposes only.
              </p>
              <button onClick={this.props.togglePopup}>Close</button>
            </div>
          </div>
        </div>
        );
    }
}


export default BioPopup;
