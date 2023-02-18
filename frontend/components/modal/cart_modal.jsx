import React from 'react';


class CartModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.props.fetchAllCartItems();
  }

  componentDidUpdate(prevProps){
    let prevProducts = {}
    console.log('CONSOLE LOG NOT WORKINGGGGGGG')
    console.log('prevProps', prevProps)
    // prevProps.cartItems.forEach( product => {
    //   prevProducts[product.productId] = product.quantity 
    // } )

    // let prevProductIds = Object.keys(prevProducts);

    // this.props.cartItems.forEach( cartItem => {
    //   if (!prevProductIds.includes(cartItem.productId)){
    //       this.setState({
    //         product: cartItem
    //       })
    //     } if (prevProductsIds.includes(cartItem.productId) && (cartItem.quantity !== prevProducts[cartItem.productId])) {
    //       this.setState({
    //         product: cartItem
    //       })
    //     }
    // })
  }


  render() {
    // const { quantity, photoUrl} = this.state.product;
    
    console.log('CART MODAL PROPS', this.props)
    return(
      <div className='modal-cart-container' onClick={ e => e.stopPropagation()}>
        <div className='cart-top-container'>
          {/* <img src={this.props.cartItems[-1].photoUrl} /> */}
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
