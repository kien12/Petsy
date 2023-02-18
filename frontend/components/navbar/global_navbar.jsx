import React from 'react';
import { Link } from 'react-router-dom'
// import CategoryNavContainer from '../category/category_nav_container';
import SearchBarContainer from './search_result'
import HeroBannerContainer from '../splash/hero_banner_container'
import CartItemsContainer from '../cart_items/cart_items_container'

class GlobalNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllCartItems();
  }

  render() {
    const { logout, currentUserId, currentUser } = this.props;
    // console.log('global nav props', this.props)

    let welcomeBanner = currentUserId ? (
        <p className="welcome-banner">Capture your moment, {currentUser[0].username}!</p>
        ) : (
          <p className="welcome-banner">Capture the moment on the wall </p>
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
          <Link to="/cart" className='top-nav-bar-cart'>
              <img src={window.shoppingCart} className ="cart-icon"/>
          </Link>
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