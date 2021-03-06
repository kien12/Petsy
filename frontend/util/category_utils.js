export const fetchAllCategories = () => (
  $.ajax({
    method: 'GET',
    url: 'api/categories'
  })
);

export const fetchCategoryProducts = (categoryId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/categories/${categoryId}`
    })
  )
}