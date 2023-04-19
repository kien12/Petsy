import React from 'react';
import CartItemContainer from './cart_item_container';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      totalPrice: 0
    }
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  updateTotalPrice = () => {
    let total = 0;
    this.props.cartItems.forEach( cartItem => {
      total += cartItem.quantity * cartItem.price
    })
    this.setState({
      totalPrice: total
    })
  }

  componentDidUpdate(  prevProps ) {
    if (this.props.cartItems.length !== prevProps.cartItems.length) {
      this.updateTotalPrice();
    } else {
        let sortedProps = this.props.cartItems.sort((a, b) => a - b);
        let sortedPrevProps = prevProps.cartItems.sort((a, b ) => a - b);
        
        for (let i = 0; i < sortedProps.length; i++) {
          if (sortedProps[i].quantity !== sortedPrevProps[i].quantity) {
            this.updateTotalPrice();
            break;
          }
        }
    }
  }
 
  //  componentDidUpdate(  prevState ) {
  //   if (prevState.totalPrice === 0) {
  //   let total = 0;
  //     this.props.cartItems.forEach( cartItem => {
  //       total += cartItem.quantity * cartItem.price
  //     })
  //     this.setState({
  //       totalPrice: total
  //     })
  //   }
  // } 

  componentDidMount(){
    this.props.fetchAllCartItems()
     this.updateTotalPrice();
  }

  handleCheckout() {
    this.props.cartItems.forEach( cartItem => {
      this.props.deleteCartItem(cartItem.id)
    })
  }

  render() {

    // if (this.props.cartItems.length > 0) return null;
    // if (this.state.totalPrice === 0 ) return null;

    // console.log('shopping cart props', this.props);
    let cartItems = this.props.cartItems.map( (cartItem, i) => {
      return (
        <div key={`${i}-${cartItem.id}`}>
          <CartItemContainer cartItem={cartItem}/>
        </div>
      );
    });

    return(
      <div >
        { (this.props.cartItems.length === 0) && ( 
          <div> Your Cart is empty! </div>
        )}
        { (this.props.cartItems.length > 0) && (
        <div>
          Your Total is ${this.state.totalPrice.toFixed(2)}!
          <button onClick={this.handleCheckout}> Proceed to Checkout</button>
        </div>
        )}
        <div className='shopping-cart-container'>
          {cartItems}
        </div>
      </div>
    )
  }

}

export default ShoppingCart;