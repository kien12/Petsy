import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.cartItem.quantity
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  handleDelete() {
    this.props.deleteCartItem(this.props.cartItem.id);
  }

  updateQuantity = (e) => {
    this.setState({
      quantity: e.target.value
    });
  }

  render() {
    console.log('cart items props', this.props)
    console.log('cart item states', this.state)
    const { name, photoUrls, price, description, quantity, sellerName} = this.props.cartItem;

   const selectNumber = Array.from(Array(21).keys());
    let selectQuantity = selectNumber.map( el => {
      return (
        
        <option key={el} value={el + 1}>{el + 1}</option>
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
            <select className="product-quantity-bar" >
                {selectQuantity}
              </select>
            <div>{price}</div>
          <button className='cart-item-remove-btn' onClick={this.handleDelete}>Remove</button>
          </div>
        </div>
      </div>
    )
  }

}

export default CartItem;