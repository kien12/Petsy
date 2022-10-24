import React from 'react';

class Review extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
  
  console.log('review props',this.props);

  const {reviews, product} = this.props;
//{ body, id, productId, rating, userId } = reviews
//[review1, review2, etc..] = reviews

let reviewForm = 
    <div>
      <form className='review-form'>
        <label htmlFor="rating">Rating</label>
        <select>
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
          <option value="1">4</option>
          <option value="1">5</option>
        </select>
      </form>
      <textarea className='review-form-body' name="" id="" cols="30" rows="10" placeholder='Write review here!'></textarea>
      <div>
        <button className='review-submit-button'>Submit!</button>
      </div>
    </div>


let reviewsArr = reviews.filter( review => product.id === review.productId)

// console.log('reviewsArr', reviewsArr);

  let reviewsList = reviewsArr.map(({ body, id, productId, rating, userId, createdAt, author}) => (
    <div className="review-container" key={id}>
      <div className='review-left-container'>
        <img src={window.defaultpicture} alt="test-review-image" className='test-review-image' />
      </div>
      <div className='right-container'>
        <h2 key={`${id}`} className='review-content'>
          <div className='review-user'>
            <span className='review-author'>{author}</span> Thu Feb 14 2022
          </div>
          <div className='review-rating'>
            rated: {rating}/5
          </div>
          <div className='review-body'>
            {body} 
       <div className="review-btns">
         <button className='review-edit-btn'>Edit</button>
         <button className='review-delete-btn'>Delete</button>
       </div>    
          </div>
         </h2>  
          
       </div>
   </div>
    
  )) 

    

  console.log('review props', this.props) 
    return(
      <div>
        <h4 className='review-info'>Reviews for this item__________________________________________________________________________________________</h4>
          {reviewsList}
        <div>
          {reviewForm}
        </div>
      </div>
    )
  }
}

export default Review;