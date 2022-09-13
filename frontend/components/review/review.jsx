import React from 'react';

class Review extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
  
  const {reviews} = this.props;

  let reviewsList = reviews.map(({body, id, productId, rating, userId}) => (
    <div>
      {/* <h2 key={`${id}`}> */}
       {/* {body} {rating} {userId} */}
      {/* </h2> */}
      {/* <button >Edit</button> */}
      <h4 className="upper-container">
        <span className="rating">
           <h4>rating</h4> 
        </span>
        <body>
          body
        </body>
      </h4>
      <div className="button-container">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
    
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