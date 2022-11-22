import React from 'react';
import ReviewEditFormContainer from './review_edit_form_container';


class ReviewCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showEditForm: false
    }
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.convertRating = this.convertRating.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  convertRating = (rating) => (
    (e) => {
      this.setState( {[rating]: parseInt(e.target.value)} )
    }
  )

  handleUpdate() {
    e.preventDefault();
    this.props.editReview(this.state)
  }

  toggleEditForm() {
   this.setState({
    showEditForm: !this.state.showEditForm
    });
  }

  handleDelete() {
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    const { body, id, productId, rating, userId, createdAt, author} = this.props.review
    const { showEditForm } = this.state;
    const { currentUserId } = this.props;

    let testArr = [];

    const testStars = (rating, idx) => {
      for (var i = 0; i < rating; i++) {
        <img key={idx} className='review-card-star-icon' src={window.starIcon}/>
      }
    }
      

    let starsArr = new Array(5, 0);

    const renderStars = starsArr.map(( star, idx ) => {
      return (
          <img key={idx} className='review-card-star-icon' src={window.starIcon}/>
      )
    });

    return(
      <div>
        {!showEditForm  && (
          <div>
            <div className='review-container' key={id}>
              <div className='review-left-container'>
                <img src={window.defaultpicture} alt="test-review-image" className='test-review-image' />
              </div>
              <div className='right-container'>
                <h2 key={`${id}`} className='review-content'>
                  <div className='review-user'>
                    <div className='review-user-info'>
                      <div className='review-author'>{author}</div> 
                      <div>Thu Dec 1 2022</div>
                    </div>
                      { (currentUserId === userId) && (
                        <div className="review-btns">
                          <button 
                          className='review-edit-btn' 
                          onClick={this.toggleEditForm}
                          >
                            Edit
                          </button>
                          <button 
                            className='review-delete-btn'
                            onClick={this.handleDelete}
                          >Delete</button>
                        </div>)}
                  </div>
                  <div className='review-rating'>
                    {/* {renderStars} */}
                    {testStars}
                  </div>
                  <div className='review-body'>
                    <p>{body}</p>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        )}
        {showEditForm && ( 
          <div>
             <ReviewEditFormContainer toggleEditForm={this.toggleEditForm} body={body} rating={rating} userId={userId} productId={productId} id={id} />
          </div>
        )} 
      </div>
    )
  }
}


export default ReviewCard;