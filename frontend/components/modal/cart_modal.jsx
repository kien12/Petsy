import React from 'react';


class CartModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product: null
    }
    this.viewCart = this.viewCart.bind(this);
  }

  viewCart(){
    this.props.history.push('/cart');
    this.props.closeModal();
  }

  componentDidUpdate(prevProps){
    let prevProducts = {};

    prevProps.cartItems.forEach( product => {
      prevProducts[product.productId] = product.quantity 
    } )
    let prevProductIds = Object.keys(prevProducts).map( productId => parseInt(productId));
    this.props.cartItems.forEach( cartItem => {
      // console.log('CART ITEM', cartItem)
      // console.log('TESTING', (!prevProductIds.includes(cartItem.productId ) ))
      if (!prevProductIds.includes(cartItem.productId )){
          this.setState({
            product: cartItem
          })
        } else if (prevProductIds.includes(cartItem.productId) && (cartItem.quantity !== prevProducts[cartItem.productId])) {
          this.setState({
            product: cartItem
          })
        }
    })
  }


  render() {
    if (!this.state.product) return null;
    const { quantity, photoUrls} = this.state.product;
    // console.log('cart props',this.props)
    return(
      <div className='modal-cart-container' onClick={ e => e.stopPropagation()}>
        <div className='cart-top-container'>
          <div className='cart-modal-img'>
            <img className='cart-modal-img' src={photoUrls[0]} />
          </div>
          <h4>length of shopping cart here</h4>
        </div>
        <div className='cart-button-container'>
          <button onClick={this.viewCart}>View Cart</button><br/>
          <button onClick={ () => this.props.closeModal()}>Keep Shopping</button>
        </div>
      </div>
    )
  }

}

export default CartModal;
