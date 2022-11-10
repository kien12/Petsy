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

  componentDidUpdate(prevProps, prevState) {
    console.log('review card prevProps', prevProps)
    console.log('review card review props', this.props)
  if (
    (prevProps.body !== this.props.body) || 
    (prevProps.rating !== this.props.rating)) {
      this.fetchReview(this.props.id);
    }
  }


  render() {
    const { body, id, productId, rating, userId, createdAt, author} = this.props.review
    const { showEditForm } = this.state;

    return(
      <div>
        {!showEditForm  && (
          <div>
            <div className='review-container' key={id}>
              <img src={window.defaultpicture} alt="test-review-image" className='test-review-image' />
              <div className='review-left-container'>
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
                  </div>
                  <div className="review-btns">
                    <button 
                    className='review-edit-btn' 
                    onClick={this.toggleEditForm}
                    >
                      Edit
                    </button>
                    <button className='review-delete-btn'>Delete</button>
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