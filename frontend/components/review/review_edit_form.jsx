import React from 'react';

class ReviewEditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: props.body,
      rating: props.rating
  
    }
    this.onChange = this.onChange.bind(this);
    this.convertRating = this.convertRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    console.log('review edit form props', this.props);
    console.log('edit form state', this.state);
    return(
      <div>
        <label>edit form</label>
        <form>
          <div>
            <label>body: </label>
            <input
              type='text'
              name='body'
              className='update-form'
              value={this.state.body}
              onChange={this.onChange('body')}
            />
            <label>rating: </label>
            <input
              type='text'
              name='rating'
              className='update-form'
              value={this.state.rating}
              onChange={this.convertRating('rating')}
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