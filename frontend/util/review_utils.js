export const getAllReviews= () => (
  $.ajax({
    method: 'GET',
    url: '/api/reviews'
  })
);

export const getReview= (reviewId) => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews/${reviewId}`
  })
);

export const createReview = review => {
    
    return $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
};


export const modifyReview = (reviewId, review) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/reviews/${reviewId}`,
        data: { review }
    })
};

export const deleteReview = reviewId => {
    return $.ajax({
        method: 'DELTE',
        url: `api/reviews/${reviewId}`
    })
};