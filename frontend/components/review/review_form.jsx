import Review from './review_list';
import React from 'react';

class ReviewForm extends React.Component {
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

  

  render() {
    // console.log('REVIEW FORM PROPS', this.props)
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
        <button className='review-submit-button'>Submit!!</button>
      </div>
    </div>

    return(
      <div className='review-form-container'>
        {reviewForm}
      </div>
    )
  }
}

export default ReviewForm;