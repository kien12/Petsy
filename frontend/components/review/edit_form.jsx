import React from 'react';

class EditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: '',
      rating: '',
      userId: '',
      productId: '',
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
    this.props.modifyReview(this.state)
  }

  render(){

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
          <button onClick={this.toggleEditForm}>cancel</button>
        </form>
      </div>
    )
  }
}

export default EditForm;