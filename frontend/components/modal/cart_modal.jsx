import React from 'react';


class CartModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product: null
    }
  }

  componentDidUpdate(prevProps){
    let prevProducts = {};
    console.log('prevProps', prevProps)
    console.log('UPDATE THIS.PROPS', this.props)





    prevProps.cartItems.forEach( product => {
      prevProducts[product.productId] = product.quantity 
    } )
    let prevProductIds = Object.keys(prevProducts).map( productId => parseInt(productId));
    console.log('prevProductIds', prevProductIds)

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
    
    console.log('CART STATE', this.state)
    console.log('STATE TEST', this.state.product)
    
    if (!this.state.product) return null;
    const { quantity, photoUrls} = this.state.product;
    
    return(
      <div className='modal-cart-container' onClick={ e => e.stopPropagation()}>
        <div className='cart-top-container'>
          <div className='cart-modal-img'>
            <img className='cart-modal-img' src={photoUrls[0]} />
          </div>
          <h4>length of shopping cart here</h4>
        </div>
        <div className='cart-button-container'>
          <button>View Cart</button><br/>
          <button onClick={ () => this.props.closeModal()}>Keep Shopping</button>
        </div>
      </div>
    )
  }

}

export default CartModal;
