import React from 'react';

class ReviewEditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: props.body,
      rating: props.rating,
      starList: [false, false, false, false, false]
    }

    this.onChange = this.onChange.bind(this);
    this.convertRating = this.convertRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickStar = this.handleClickStar.bind(this);
  }

  componentDidMount() {
    this.handleClickStar(this.state.rating - 1)
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
  onChange = (type) => (
    (e) => {
      this.setState({ [type]: e.target.value});
    }
  )

  convertRating = (rating) => (
    (e) => {
      this.setState( {[rating]: parseInt(e.target.value)} )
    }
  )

  handleSubmit(e) {
    e.preventDefault();
    this.props.editReview({
      body: this.state.body,
      rating: this.state.rating,
      userId: this.props.userId,
      productId: this.props.productId,
      id: this.props.id
    });
    this.props.toggleEditForm();
  }

  render(){
    const { starList } = this.state;

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
        <form>
          <div>
            <div className='review-form-stars'>{renderStars}</div>
            <textarea
              type='text'
              name='body'
              className='review-form-body'
              value={this.state.body}
              onChange={this.onChange('body')}
            />
          </div>
          <button onClick={this.props.toggleEditForm}>cancel</button>
          <button onClick={this.handleSubmit}>
            update
          </button>
        </form>
      </div>
    )
  }
}

export default ReviewEditForm;