import React from 'react';

class ReviewCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showEditForm: false
    }
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  
  toggleEditForm() {
   this.setState({
    showEditForm: !this.state.showEditForm
    });
  }


  render() {
    const { body, id, productId, rating, userId, createdAt, author} = this.props.review
    const { showEditForm } = this.state;

    return(
      <div>
        {!showEditForm && (
          <div>
            <div className='review-container' key={id}>
              <img src={window.defaultpicture} alt="test-review-image" className='test-review-image' />
              <div className='review-left-container'>
                image placeholder
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
             <EditFormContainer />
          </div>
        )} 
      </div>
    )
  }
}


export default ReviewCard;