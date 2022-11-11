import React from 'react';
import CategoryNavContainer from '../category/category_nav_container';
import SearchBarContainer from './search_result'

class GlobalNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUserId !== this.props.currentUserId) {
      
    }
  }


  render() {
    const { logout, currentUserId } = this.props;
    console.log('global nav props', this.props);
    return (
      <div>
        <div className='top-nav-bar'>
          <div className='logo'>
            <img src={window.testPetsyLogo} alt="petsy-logo" />
          </div>
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
        <CategoryNavContainer/>
      </div>
    )
  }

}

export default GlobalNavBar;