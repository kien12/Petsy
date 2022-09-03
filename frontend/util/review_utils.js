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
