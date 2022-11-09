import React from 'react';

class Review extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: '',
      rating: '',
      userId: '',
      productId: '',
      showEditForm: false
    }
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  toggleEditForm() {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  
  onChange = (type) => (
    (e) => {
      this.setState({ [type]: e.target.value});
    }
  )

  convertRating = (rating) => (
    (e) => {
      this.setState( {[rating]: parseInt(e.target.value)} )
    }
  )

  handleSubmit(e) {
    e.preventDefault();
    this.props.modifyReview(this.state)
  }

  render() {
  
  console.log('review props',this.props);
  const {reviews, product, modifyReview, deleteReview} = this.props;
  
  let updateForm = 
    <div>
      <label>edit form</label>
      <form>
        <div>
          <label>body: </label>
          <input
            type='text'
            name='body'
            className='update-form'
            value={this.state.body}
            onChange={this.onChange('body')}
          />
          <label>rating: </label>
          <input
            type='text'
            name='rating'
            className='update-form'
            value={this.state.rating}
            onChange={this.convertRating('rating')}
          />
        </div>
        <button onClick={this.toggleEditForm}>cancel</button>
      </form>
    </div>

  
// { body, id, productId, rating, userId,  } = reviews
//[review1, review2, etc..] = reviews
  const {showEditForm} = this.state;





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
         <button 
            className='review-edit-btn' 
            onClick={this.toggleEditForm}
         >Edit</button>
         <button className='review-delete-btn'>Delete</button>
       </div>    
          </div>
         </h2>  
          
       </div>
   </div>
    
  )) 

    

  // console.log('review props', this.props) 
    return(
      <div>
        <h4 className='review-info'>Reviews for this item__________________________________________________________________________________________</h4>
          {reviewsList}
       { !showEditForm && ( <div>
          {reviewForm}
        </div> )}
       { showEditForm && ( <div>
          {updateForm}
        </div> )}
      </div>
    )
  }
}

export default Review;