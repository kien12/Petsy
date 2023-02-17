import React from 'react';

class CartModal extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    return(
      <div className='modal-cart-container' onClick={ e => e.stopPropagation()}>test cart modal</div>
    )
  }

}

export default CartModal;
