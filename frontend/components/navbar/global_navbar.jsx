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
    const { logout, currentUserId } = this.props;
    return (
      <div>
        <div className='top-nav-bar'>
            <Link to="/"> 
          <div className='logo'>
              <img src={window.testPetsyLogo} alt="petsy-logo" />
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
      
          <button className='top-nav-bar-cart'>cart</button>
        </div>
        <div className='ketsy-welcome'>
            Capture your moment on the wall!
            <HeroBannerContainer/>
          </div>
        {/* <CategoryNavContainer/> */}
        {/* <HeroBannerContainer/> */}
      </div>
    )
  }

}

export default GlobalNavBar;