import React from 'react';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: '',
      rating: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertRating = this.convertRating.bind(this);
  }

  toggleEditForm() {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  }
  
  convertRating = () => (
    (e) => {
      console.log(e)
      this.setState( {rating: parseInt(e.target.value)} )
    }
  )
    
  handleChange= (type) => {
    return (e) => {
      this.setState({[type]: e.target.value})
    }    
  }
  
  handleSubmit(e){
    console.log('handle submit product id', this.props.productId)
    console.log('handle submit user id', this.props.currentUserId)
    console.log('handle submit body', this.state.body)
    console.log('handle submit rating', this.state.rating)
    e.preventDefault();
    this.props.createReview({
      body: this.state.body,
      rating: this.state.rating,
      productId: this.props.productId,
      userId: this.props.currentUserId
    }).then( res => console.log('response',res));
  }


  render() {

    // console.log('review form state', this.state)
    console.log('review form props', this.props)
    
    return(
      <div className='review-form-container'>
        <div>
          <form className='review-form' onSubmit={this.handleSubmit}>
            {/* <label htmlFor="rating">Rating</label>
            <select>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select> */}
            <div>
              <textarea 
                className='review-form-body'
                cols="30" 
                rows="10" 
                placeholder='Write review here!'
                onChange={this.handleChange('body')}
                value={this.state.body}
              />
            </div>
            <button className='review-submit-button'>Submit!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ReviewForm;