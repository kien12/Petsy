import React from 'react';
import { Link } from 'react-router-dom'
// import CategoryNavContainer from '../category/category_nav_container';
import SearchBarContainer from './search_result'
import HeroBannerContainer from '../splash/hero_banner_container'

class GlobalNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { logout, currentUserId, currentUser } = this.props;


    let welcomeBanner = currentUserId ? (
        <p className="welcome-banner">Capture your moment on the wall!</p>
        ) : (
          <p className="welcome-banner">Capture the moment on the wall!</p>
    );

    return (
      <div>
        <div className='top-nav-bar'>
            <Link to="/"> 
          <div className='ketsy-logo'>
              <img src={window.ketsylogo} alt="ketsy-logo" />
          </div>
            </Link>
          <div className='top-nav-bar-search-bar'>
            <SearchBarContainer/>
          </div>
          {currentUserId ? (
            <button className='top-nav-bar-login' onClick={logout}>Log Out</button>
           ) : (
            <button className='top-nav-bar-login' onClick={() => this.props.openModal('login')}>Sigh in</button>
           )}
      
          <button className='top-nav-bar-cart'>
            <img src={window.shoppingCart} className ="cart-icon"/>
          </button>
        </div>
        <div className='ketsy-welcome'>
            {welcomeBanner}
            <HeroBannerContainer/>
          </div>
        {/* <CategoryNavContainer/> */}
        {/* <HeroBannerContainer/> */}
      </div>
    )
  }

}

export default GlobalNavBar;