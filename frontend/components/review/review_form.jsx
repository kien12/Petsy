import React, { useState } from 'react';
//  import { starIcon, emptyStarIcon} from '../../../app/assets/images'
// import { StarRating } from './star_rating';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: '',
      rating: 1,
      starList: [false, false, false, false, false],
      fillStar: false
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



  componentDidUpdate(prevState) {
    if (this.state.starFilled != prevState.starFilled) {
      this.forceUpdate();
    }
  }

      // updates a specific star's state in starList based on its index
  handleClickStar = (index) => {
    //get the star in starList array based on its index
    const getStar = this.state.starList[index];
    // update the star's value
    const newStarState = !getStar;
    // make a copy of the starList array so you don't override the previous state
    const newStarList = this.state.starList.slice();
    // update the star in the starList to the new value
    if ((index) > this.state.rating ){
      for (var i = 0; i < index; i++) {
        newStarList[i] = newStarState
      }
    } else {
      newStarState = [false, false, false, false, false];
      for (var j = 5; j > index; j--) {
        newStarList[j] = newStarState
      }
    }

    newStarList[index] = newStarState;
    //set the new state of starList to the new array with the updated star
    this.setState({ 
      starList: newStarList,
      rating: this.state.rating = index + 1
    });
    
  }

  render() {

    console.log('review form state', this.state)
    console.log('review form props', this.props)
    const { fillStar, starList } = this.state;

    let errors;

    if (this.props.errors.length !== 0){
      errors = (
        <div className='review-errors'>
          <p>{this.props.errors[0]}</p> 
          <p>{this.props.errors[1]}</p>
        </div>
      )
    }

    const renderStars = starList.map((star, index) => {
      //index starts at 0. Star count should start with 1. This is only used to name the star, otherwise its not needed
      const starNum = index + 1;
      return (
        <div 
          key={index}
          // if the star is true, render yellow, otherwise render grey;
          className={ star ? 'yellow-star' : 'grey-star'}
          onClick={() => this.handleClickStar(index)}>
          {`star-${starNum}`} 
        </div>
      )
    });

    return(
      <div className='review-form-container'>
        <div>
          <form className='review-form' onSubmit={this.handleSubmit}>
            <div className='review-form-stars'>
              {renderStars}
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