import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='footer-container'>
                <div className='mailing-list-container'>
                    <div className='riptear-1'>
                        {/* {ripTear1} */}
                    </div>
                    <p>Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Ketsy.</p>
                    
                    <div className='mailing-list-input'>
                        <input type="text" placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </div>

                <div className='footer-links-container'>
                    <div className='riptear-2'>
                        {/* {ripTear2} */}
                    </div>

                    <div className='footer-blocks'>
                        <div className='footer-shop fblock'>
                            <h2>Shop</h2>
                                <p>Gift cards</p>
                                <p>Ketsy blog</p>
                        </div>

                        <div className='footer-sell fblock'>
                            <h2>Sell</h2>
                                <p>Sell on Ketsy</p>
                                <p>Teams</p>
                                <p>Forums</p>
                                <p>Affiliates</p>
                        </div>

                        <div className='footer-about fblock'>
                            <h2>About</h2>
                                <p>Ketsy, Inc.</p>
                                <p>Policies</p>
                                <p>Investors</p>
                                <p>Careers</p>
                                <p>Press</p>
                                <p>Impact</p>
                        </div>

                        <div className='footer-help fblock'>
                            <h2>Help</h2>
                                <p>Help Center</p>
                                <p>Privacy settings</p>

                            <div className='footer-icon-section'>
                                <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank"><div className='download-app-btn'><img src={window.downloadiconbtn}/> Download the Ketsy App</div></a>

                                <div className='footer-logo-container'>
                                    <a href="https://github.com/kien12" target="_blank"> <img src={window.github}/> </a>
                                    <a href="https://www.linkedin.com/in/kien-nguyen-44068b254/" target="_blank"><img src={window.linkedin} /> </a>
                                    <a href="mailto:kiennnguyen93@gmail.com"><img src={window.mailicon}/></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='footer-end-container'>
                    
                    <div className='lang-currency'> 
                    <img src={window.usaIcon}/>
                    United States   |   English (US)   |   $ (USD)
                    </div>
                    <div className='terms-policies'>
                        <p>© 2022 Ketsy, Inc.</p>
                        <p><u>Terms of Use</u></p>
                        <p><u>Privacy</u></p>
                        <p><u>Interest-based ads</u></p>
                    </div>
                </div>

            </div>
        )
    }

}

export default Footer;
