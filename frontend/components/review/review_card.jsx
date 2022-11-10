import React from 'react';

class ReviewCard extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { body, id, productId, rating, userId, createdAt, author} = this.props.review
    return(

// console.log('reviewsArr', reviewsArr);
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
            // onClick={this.toggleEditForm}
         >Edit</button>
         <button className='review-delete-btn'>Delete</button>
       </div>    
          </div>
         </h2>
          {/* { showEditForm && ( <div>
            <EditFormContainer />
          </div> )}   */}
       </div>
   </div>
    
  )
          }
}

export default ReviewCard;