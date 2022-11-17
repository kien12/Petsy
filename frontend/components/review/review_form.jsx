import React, { useState } from 'react';
//  import { starIcon, emptyStarIcon} from '../../../app/assets/images'
import { StarRating } from './star_rating';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: '',
      rating: 1,
      fillStar: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertRating = this.convertRating.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  toggleEditForm() {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  }
  
  convertRating = () => (
    (e) => {
      console.log(e)
      this.setState( {rating: parseInt(e.target.value)} )
    }
  )
    
  handleChange = (type) => {
    return (e) => {
      this.setState({[type]: e.target.value})
    }    
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.createReview({
      body: this.state.body,
      rating: this.state.rating,
      product_id: this.props.productId,
      user_id: this.props.currentUserId
    }).then( () => this.clearState());
  }

  clearState() {
    this.setState({
      body: '',
      rating: 5,
      product_id: this.props.productId,
      user_id: this.props.currentUserId
    })
  }

  starSeq = () => {
    return (
      <div className='star-container'>
        <div className='star-test'>
          block
        </div>
        <div className={ this.state.filledStar? 'star-test' : 'star-yellow'} onClick={this.handleStarClick}>
          block2
        </div>
      </div>
    )
  }

  handleStarClick = () => {
      this.setState({
        fillStar: !this.state.fillStar
      }
    )
  }

  componentDidUpdate(prevState) {
    if (this.state.starFilled != prevState.starFilled) {
      this.forceUpdate();
    }
  }

  render() {

    console.log('review form state', this.state)
    console.log('review form props', this.props)
    
    return(
      <div className='review-form-container'>
        <div>
          <form className='review-form' onSubmit={this.handleSubmit}>
            <div className='review-form-stars'>
              {/* {this.starSeq()} */}
              {/* <StarRating rating={this.props.rating} /> */}
            </div>
            <div>
              <textarea 
                className='review-form-body'
                cols="30" 
                rows="10" 
                placeholder='Write review here!'
                onChange={this.handleChange('body')}
                value={this.state.body}
              />
            </div>
            <button className='review-submit-button'>Submit!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ReviewForm;