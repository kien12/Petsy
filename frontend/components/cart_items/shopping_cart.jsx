import React from 'react';
import CartItemContainer from './cart_item_container';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      totalPrice: 0
    }
  }

  componentDidUpdate( prevProps ) {
    if (this.props.cartItems.length !== prevProps.cartItems.length) {
      let total = 0;
      this.props.cartItems.forEach( cartItem => {
        total += cartItem.quantity * cartItem.price
      })
      this.setState({
        totalPrice: total
      })
    }

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
      <div >
        <div>
          {this.state.totalPrice}
        </div>
        <div className='shopping-cart-container'>
          {cartItems}
        </div>
      </div>
    )
  }

}

export default ShoppingCart;