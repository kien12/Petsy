import React from 'react';
import { Link } from 'react-router-dom';
import ReviewContainer from '../review/review_container'

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
      sellerName, 
      reviews
    } = this.props.product;
    
    console.log('this.props.product', this.props.product)
    console.log('reviews inside product showpage', reviews)
    return (    
      <div className='product-showpage-container'>
        <section className='product-top-container'>
          <div className='product-image'>
            <img src={window.testProductPicture} alt="image" />
            {/* <a> image </a> */}
          </div>
          <div className='product-details'>
            <h2 className='product-seller-name'>{`${sellerName}'s Store`}</h2>
            <h1 className='product-item-name'>{name}</h1>
            <h2 className='product-price'>${price}</h2>
            <div>
              <label className="product-quantity">Quantity</label><br/>
                <select className="product-quantity-bar">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </select>
            <button className="product-add-to-cart-button">Add to Cart</button>
            </div>
            <br>
            </br>
            <span className='product-description'>Description</span>
            <h2 className='product-details'>{description}</h2>
          </div>
        </section>
        <section className='review-container'>
          <ReviewContainer reviews={reviews}/>
        </section>
      </div>
    )
      
  }
}

export default ProductShowPage
