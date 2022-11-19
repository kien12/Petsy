import React from 'react';


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
    if (this.props.currentUserId) {
      this.props.createReview({
        body: this.state.body,
        rating: this.state.rating,
        product_id: this.props.productId,
        user_id: this.props.currentUserId
      }).then( () => this.clearState());
    } else {
      window.alert('You must be signed in to write a review!');
      this.props.openModal('login');
    }
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

  handleClickStar = (index) => {
    const newStarList = this.state.starList.slice();

    for (var i = 0; i < newStarList.length; i++) {
      if (i <= index) {
        newStarList[i] = true;
      } else {
        newStarList[i] = false;
      }
    }
    this.setState({
      starList: newStarList,
      rating: index + 1
    });
  }

  render() {
    const { fillStar, starList } = this.state;
    const { openModal, currentUserId } = this.props;
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
      const starNum = index + 1;
      return (
        <div 
          key={index}
          onClick={() => this.handleClickStar(index)}>
          <img 
            className='review-star-icon'
            src={ star ? window.starIcon : window.emptyStarIcon} />
        </div>
      )
    });

    return(
      
      <div className='review-form-container'>
        <h3>Add a Review</h3>
        <div className='review-form-errors'>{errors}</div>
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