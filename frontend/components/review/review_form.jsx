import React from 'react';
//  import { starIcon, emptyStarIcon} from '../../../app/assets/images'
import { StarRating } from './star_rating';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: '',
      rating: 1,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertRating = this.convertRating.bind(this);
    this.clearState = this.clearState.bind(this);
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
    
  handleChange = (type) => {
    return (e) => {
      this.setState({[type]: e.target.value})
    }    
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.createReview({
      body: this.state.body,
      rating: this.state.rating,
      product_id: this.props.productId,
      user_id: this.props.currentUserId
    }).then( () => this.clearState());
  }

  clearState() {
    this.setState({
      body: '',
      rating: 5,
      product_id: this.props.productId,
      user_id: this.props.currentUserId
    })
  }

  render() {

    // console.log('review form state', this.state)
    console.log('review form props', this.props)
    
    return(
      <div className='review-form-container'>
        <div>
          <form className='review-form' onSubmit={this.handleSubmit}>
            <div className='review-form-stars'>
              <StarRating />
              {/* <span className='star'>&#9733;</span> */}
              {/* <input type="image" src={window.starIcon} alt="star-icon" className='star-icon' /> */}
              {/* <input type="image" src={window.starIcon} alt="star-icon" className='star-icon' /> */}
              {/* <input type="image" src={window.starIcon} alt="star-icon" className='star-icon' /> */}
              {/* <input type="image" src={window.starIcon} alt="star-icon" className='star-icon' /> */}
              {/* <input type="image" src={window.starIcon} alt="star-icon" className='star-icon' /> */}
            </div>
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