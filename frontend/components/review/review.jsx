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
  let reviewsList = reviews.map(({ body, id, productId, rating, userId, createdAt}) => (
    <div className="review-container">
      <div className='left-container'>
        <img src={window.testReviewImage} alt="test-review-image" className='test-review-image' />
      </div>
      <div className='right-container'>
       <div className="review-btns">
         <button className='review-edit-btn'>Edit</button>
         <button className='review-delete-btn'>Delete</button>
       </div>    
        <h2 key={`${id}`} className='review-content'>
          <div className='review-user'>
            <span className='review-author'>Author</span> Thu Feb 14 2022
          </div>
          <div className='review-rating'>
            rating {rating}
          </div>
          <div className='review-body'>
            {body} 
          </div>
         </h2>  
          
       </div>
   </div>
    
  )) 
  // const reviewList = reviews.filter(review => {
    // this.review.match.params.id = this.props.params.id
  // })


  console.log('review props', this.props) 
    return(
      <div>
        <h4 className='review-info'>Reviews for this item</h4>
        {reviewsList}
      </div>
    )
  }
}

export default Review;