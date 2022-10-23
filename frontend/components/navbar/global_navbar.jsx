import React from 'react';
import CategoryNavContainer from '../category/category_nav_container';
import SearchBarContainer from './search_result'

class GlobalNavBar extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { logout, currentUser } = this.props;
    console.log('GLOBAL NAV BAR PROPS', this.props)
    return (
      <div>
        <div className='top-nav-bar'>
          {/* <div className='top-nav-bar-logo'>{window.TestPetsyLogo}</div> */}
          <div className='logo'>
            <img src={window.testPetsyLogo} alt="petsy-logo" />
          </div>
          <div className='top-nav-bar-search-bar'>
            <SearchBarContainer/>
          </div>
          {currentUser ? (
            <button className='top-nav-bar-login' onClick={logout}>Log Out</button>
           ) : (
            <button className='top-nav-bar-login' onClick={() => this.props.openModal('login')}>Sigh in</button>
           )}
      
          <button className='top-nav-bar-cart'>cart</button>
        </div>
        <CategoryNavContainer/>
      </div>
    )
  }

}

export default GlobalNavBar;