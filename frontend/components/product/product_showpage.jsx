import React from 'react';
import { Link } from 'react-router-dom';
import ReviewListContainer from '../review/review_list_container'
import ReviewFormContainer from '../review/review_form_container'
import BioPopup from '../modal/bio_popup';
import { openModal } from '../../actions/modal_actions';

class ProductShowPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showBioPopup: false,
      showCreateForm: true,
      quantity: 1,
      productId: this.props.match.params.id,
      userId: this.props.currentUserId,

      
    };
    this.toggleBioPopup = this.toggleBioPopup.bind(this);
    this.toggleCreateForm = this.toggleCreateForm.bind(this);
    this.addToCart = this.addToCart.bind(this);
    // this.updateQuantity = updateQuantity.bind(this);
  }

  addToCart(e){
    e.preventDefault();
    if (this.props.currentUserId) {
      const product = {
        quantity: parseInt(this.state.quantity),
        user_id: this.state.userId,
        product_id: parseInt(this.state.productId)
      }
      console.log('ADD TO CART PRODUCTS', product)
      this.props.addCartItem(product).then(() => this.props.openModal('cart'));
    } else {
      alert('You must be signed in before you add to cart!');
      this.props.openModal('login');
    } 
  }

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.id)
  }

  toggleBioPopup() {
  this.setState({
    showBioPopup: !this.state.showBioPopup,
    });
  }

  toggleCreateForm() {
  this.setState({
    showCreateForm: !this.state.showCreateForm
    });
  }

  updateQuantity = (e) => {
    this.setState({
      quantity: e.target.value
    })
  }

  

  render() {
    if(!this.props.product) return null;
    console.log('product showpage props', this.props);
    console.log('product showpage state', this.state);
    

    const product = this.props.match.params.id;
    const { 
      name, 
      description,  
      price,
      sellerName, 
      reviews,
      photoUrls
    } = this.props.product;
    
    console.log(selectNumber);
    console.log(selectNumber);

    const selectNumber = Array.from(Array(21).keys());
    let selectQuantity = selectNumber.map( el => {
      return (
        
        <option key={el} value={el + 1}>{el + 1}</option>
      )
    }) 

    let rightContainer = 
      <div className='review-faqs'>
        <button className='faqs-button'>FAQs</button>
        <div className='meet-your-seller'>Meet your seller</div>
        <section className='review-faqs'>
          <div className='product-seller-details'>
            <img className='default-picture' src={window.defaultpicture} alt="default-picture" />
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
            <img src={photoUrls} alt="image" />
          </div>
          <div className='product-details'>
            <h2 className='product-seller-name'>{`${sellerName}'s Store`}</h2>
            <h1 className='product-item-name'>{name}</h1>
            <h2 className='product-showpage-price'>${price}</h2>
            <div>
              <label className="product-quantity">Quantity</label><br/>
                <select className="product-quantity-bar" onChange={this.updateQuantity}>
                  {selectQuantity}
                </select>
            <button className="product-add-to-cart-button" onClick={this.addToCart}>Add to Cart</button>
            </div>
            <br>
            </br>
            <span className='product-description'>Description</span>
            <h2 className='product-details'>{description}</h2>
          </div>
        </section>
        <section className='review-main-container'>
          <ReviewListContainer product={this.props.product} toggleCreateForm={this.toggleCreateForm}/>
          {rightContainer}
        </section>
          { this.state.showCreateForm && (
            <ReviewFormContainer product={this.props.product}/>
          )}
      </div>
    )
      
  }
}

export default ProductShowPage
