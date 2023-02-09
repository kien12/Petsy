export const getAllCartItems = () => (
  $.ajax({
    method: 'GET',
    url: '/api/cart_items'
  })
);

export const createCartItem = (cartItem) => (
  $.ajax({
    method: 'POST',
    url: '/api/cart_items',
    data: { cartItem }
  })
);

export const updateCartItem = cartItem => (
  $.ajax({
    method: 'PATCH',
    url: `/api/cart_items/${cartItem.id}`,
    data: { cartItem }
  })
);

export const deleteCartItem = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/cart_items/${id}`,
  })
);





