import React from 'react';
import { Link } from 'react-router-dom';

class ProductShowPage extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.id)
  }

  // /products/:id"
  render() {
    if(!this.props.product) return null;

    const product = this.props.match.params.id;
    const { 
      name, 
      description,  
      price 
    } = this.props.product;

    return (    
      <div className='product-showpage-description'>
        <div className='product-image'>
          product image
        </div>
        <div className='product-details'
        >
          <p>{name}</p>
          <p>{description}</p>
          <p>{price}</p>
        </div>
        <div>REVIEW COMPONENT</div>
      </div>
    )
      
  }
}

export default ProductShowPage
