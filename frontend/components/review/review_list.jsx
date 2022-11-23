import React from 'react';
import ReviewFormContainer from './review_form_container';
import EditFormContainer from './review_edit_form_container';
import ReviewCardContainer from './review_card_container';
import { fetchReview } from '../../actions/review_action';

class ReviewList extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  onChange = (type) => (
    (e) => {
      this.setState({ [type]: e.target.value});
    }
  )

  componentDidUpdate(prevProps) {
    if (this.props.reviews.length !== prevProps.reviews.length) {
      this.props.fetchReviews();
    }
  }

  render() {
  const {reviews, product, modifyReview, deleteReview} = this.props;
  let reviewsArr = reviews.filter( review => product.id === review.productId)
  let reviewsList = reviewsArr.map((review) => {
    return( 
      <li key={review.id}>
        <ReviewCardContainer review ={review}/>
      </li>
    )
  });
  
  return (
    <div>
      <h4 className='review-info'>
        Reviews for {product.name} 
      </h4>
        <div>
          {reviewsList}
        </div>
    </div>
  )
  }    
}

export default ReviewList;