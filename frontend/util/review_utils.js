export const getAllReviews= () => (
  $.ajax({
    method: 'GET',
    url: '/api/reviews'
  })
);

export const getReview= (review) => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews/${review.id}`
  })
);

export const createReview = review => {
    return $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
};


export const modifyReview = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
};

export const deleteReview = reviewId => {
    return $.ajax({
        method: 'DELTE',
        url: `/api/reviews/${reviewId}`
    })
};