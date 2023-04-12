import React from 'react';
import CartItemContainer from './cart_item_container';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount(){
    this.props.fetchAllCartItems()
  }

  render() {
    if (this.props.cartItems.length === 0) return null;

    // console.log('shopping cart props', this.props);
    let cartItems = this.props.cartItems.map( (cartItem, i) => {
      return (
        <div key={i}>
          <CartItemContainer cartItem={cartItem}/>
        </div>
      );
    });
    return(
      <div className='shopping-cart-container'>
        {cartItems}
      </div>
    )
  }

}

export default ShoppingCart;