export const fetchAllReviews= () => (
  $.ajax({
    method: 'GET',
    url: '/api/reviews'
  })
);

export const fetchReview= (reviewId) => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews/${id}`
  })
);

