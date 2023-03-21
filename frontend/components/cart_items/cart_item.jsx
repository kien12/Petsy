import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.cartItem.quantity
    };

    this.handleDelete = this.handleDelete.bind(this);
    // this.updateQuantity = this.updateQuantity.bind(this);
    // this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete() {
    this.props.deleteCartItem(this.props.cartItem.id);
  }

  updateQuantity = (e) => {
    this.setState({
      quantity: e.target.value
    });
  }


  // handleUpdate() {
  //   this.props.updateCartItem({
  //     id: this.props.id,
  //     quantity: parseInt(this.state.quantity),
  //     user_id: this.props.cartItem.userId,
  //     product_id: this.props.cartItem.productId
  //   }).then( res => console.log('res', res))
  // }

  componentDidUpdate( _ , prevState) {
    console.log('handleupdate')
    if (prevState.quantity !== this.state.quantity) {
      console.log('working')
      this.props.updateCartItem({
      id: this.props.cartItem.id,
      quantity: parseInt(this.state.quantity),
      user_id: this.props.cartItem.userId,
      product_id: this.props.cartItem.productId
    }).then( res => console.log('res', res))
    }
  }

  render() {
    console.log('cart items propss', this.props)
    console.log('cart item states', this.state)
    const { name, photoUrls, price, description, quantity, sellerName} = this.props.cartItem;
  
    const startingNum = this.state.quantity;
   const selectNumber = Array.from(Array(20).keys());
    let selectQuantity = selectNumber.map( el => {
      return (
        
        <option 
          key={el} 
          value={ el + 1} 
        >{el + 1}</option>
      )
    }) 

    return(
      <div>
        <div>
          <h2>Sold by: {sellerName}</h2>
          <div className='cart-item-container'>
            <img className='cart-product-img' src={photoUrls[0]}/>
            <div>
              {name} - {description}
            </div>
            <select value={this.state.quantity} className="product-quantity-bar" onChange={this.updateQuantity}>
                {selectQuantity}
              </select>
            <div>{price}</div>
            <button className='cart-item-remove-btn' onClick={this.handleDelete}>Remove</button>
            {/* <button onClick={this.handleUpdate}>save</button> */}
          </div>
        </div>
      </div>
    )
  }

}

export default CartItem;