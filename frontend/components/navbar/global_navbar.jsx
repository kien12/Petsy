import React from 'react';
import CategoryNavContainer from '../category/category_nav_container';

class GlobalNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className='top-nav-bar'>
          <div className='top-nav-bar-logo'>Logo</div>
          <div className='top-nav-bar-search-bar'>search bar</div>
          <button className='top-nav-bar-login' onClick={() => this.props.openModal('login')}>login</button>
          <button className='top-nav-bar-cart'>cart</button>
        </div>
        <CategoryNavContainer/>
      </div>
    )
  }

}

export default GlobalNavBar;