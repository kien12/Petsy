import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../app/assets/images/bones.jpeg'

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
      price,
      seller_name 
    } = this.props.product;

    return (    
      <div className='product-showpage-container'>
        <section className='product-top-container'>
          <div className='product-image'>
            <a> image </a>
          </div>
          <div className='product-details'
          >
            <h2 className='product-showpage-container'>{seller_name}</h2>
            <h1>{name}</h1>
            <h2>${price}</h2>
            <label for="product-showpage-quantity">Quantity</label><br></br>
            <select className="product-showpage-quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <br>
            </br>
            <span className='product-details-description'>Description</span>
            <h2>{description}</h2>
          </div>
        </section>
        <section>REVIEW COMPONENT</section>
      </div>
    )
      
  }
}

export default ProductShowPage
