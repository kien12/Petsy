import React from 'react';
import { Link } from 'react-router-dom';
import ReviewContainer from '../review/review_container'
import ReviewFormContainer from '../review/review_form_container'
import BioPopup from '../modal/bio_popup';

class ProductShowPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showBioPopup: false
    };

    this.toggleBioPopup = this.toggleBioPopup.bind(this);
  }

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.id)
  }

  toggleBioPopup() {
  this.setState({
    showBioPopup: !this.state.showBioPopup,
    });
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

    let rightContainer = 
      <div className='review-faqs'>
        <button className='faqs-button'>FAQs</button>
        <div className='meet-your-seller'>Meet your seller</div>
        <section className='review-faqs'>
          <div className='product-seller-details'>
            <img className='default-picture' src={window.testReviewImage} alt="default-picture" />
            <div className='product-seller-info'>
              <div className='test-store-owner'>Kien</div>
              <div className='owner-of-store'>Owner of store</div>
            </div>
          </div>
          <button className='faqs-message-button' onClick={this.toggleBioPopup}>Message Kien</button>
          {this.state.showBioPopup ? (
                  <div className="bio-container">
                    <BioPopup togglePopup={this.toggleBioPopup}/>
                  </div>
                ) : null}
      </section>
    </div>
    
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
        <section className='review-main-container'>
          <ReviewContainer product={this.props.product}/>
          {rightContainer}
        </section>
          <ReviewFormContainer product={this.props.product}/>
      </div>
    )
      
  }
}

export default ProductShowPage
