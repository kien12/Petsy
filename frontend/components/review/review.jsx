import React from 'react';

class Review extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
  
  const {reviews} = this.props;
//{ body, id, productId, rating, userId } = reviews
//[review1, review2, etc..] = reviews
  let reviewsList = reviews.map(({body, id, productId, rating, userId, createdAt}) => (
    <div className='review-container'>
      <div className='left-container'>
        <img src={window.testReviewImage} alt="test-review-image" className='test-review-image' />
      </div>
      <div className='right-container'>
        <h2 key={`${id}`} className='review-content'>
          <div className='review-body'>
            {body} 
          </div>
          <div className='review-rating'>
            {rating}
          </div>
          <div className='review-user'>
            {userId} created at :{createdAt}
          </div>
        </h2>        
        <div className="review-btns">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
    
  )) 
  // const reviewList = reviews.filter(review => {
    // this.review.match.params.id = this.props.params.id
  // })


  console.log('review props', this.props) 
    return(
      <div>
        {reviewsList}
      </div>
    )
  }
}

export default Review;