import React from 'react';

class Review extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
  
  const {reviews} = this.props;

  let reviewsList = reviews.map(({body, id, productId, rating, userId}) => (
    <h2>
      {/* {body} {rating} {userId} */}
      {review}
    </h2>
  )) 


  console.log('review props', this.props) 
    return(
      <div>
        {reviewsList}
      </div>
    )
  }
}

export default Review;