import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('cart items props', this.props)
    const { name, photoUrls, price, description, quantity, sellerName} = this.props.cartItem;

    return(
      <div>
        <h2>Sold by: {sellerName}</h2>
        <div className='cart-item-container'>
          <img className='cart-product-img' src={photoUrls[0]}/>
          <div>
            {name} - {description}
          </div>
          <select><option value="1">1</option></select>
          <div>{price}</div>
        </div>
        <button>Removeeeeeeeee</button>
      </div>
    )
  }

}

export default CartItem;