import React from 'react';
import ReviewFormContainer from './review_form_container';
import EditFormContainer from './review_edit_form_container';
import ReviewCardContainer from './review_card_container';

class ReviewList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: '',
      rating: '',
      userId: '',
      productId: ''
    }
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  onChange = (type) => (
    (e) => {
      this.setState({ [type]: e.target.value});
    }
  )

  render() {
  const {reviews, product, modifyReview, deleteReview} = this.props;
  const {showEditForm} = this.state;
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
        Reviews for this item__________________________________________________________________________________________
      </h4>
        <div>
          {reviewsList}
        </div>
      <div>
        <ReviewFormContainer/>
      </div> 
    </div>
  )
  }    
}

export default ReviewList;