import React from 'react';
import ReviewFormContainer from './review_form_container';
import EditFormContainer from './edit_form_container';
import ReviewCard from './review_card';

class Review extends React.Component {
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

  componentDidMount() {
    this.props.fetchReviews();
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

  render() {
  
  console.log('review props',this.props);
  const {reviews, product, modifyReview, deleteReview} = this.props;
  
  const {showEditForm} = this.state;
  let reviewsArr = reviews.filter( review => product.id === review.productId)

  let reviewsList = reviewsArr.map((review) => {
    return <ReviewCard review ={review}/>
  });
   
  return (
    <div>
      <h4 className='review-info'>
        Reviews for this item__________________________________________________________________________________________
      </h4>
        {reviewsList}
      <div>
        <ReviewFormContainer/>
      </div> 
    </div>
  )
  }    
}

export default Review;