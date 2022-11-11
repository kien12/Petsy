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
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertRating = this.convertRating.bind(this);
  }

  toggleEditForm() {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  }
  
  convertRating = (rating) => (
    (e) => {
      this.setState( {[rating]: parseInt(e.target.value)} )
    }
  )
    
  onChange(type) {
    (e) => {
      this.setState({[type]: e.target.value})
    }    
  }
  
  handleSubmit(){
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }


  render() {
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
        <button className='review-submit-button' onChange={this.handleSubmit}>Submit!!</button>
      </div>
    </div>
    
    console.log('review form state', this.props)

    return(
      <div className='review-form-container'>
        {reviewForm}
      </div>
    )
  }
}

export default ReviewForm;