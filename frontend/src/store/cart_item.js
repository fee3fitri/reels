import csrfFetch from "./csrf";

const ADD_ITEMS = 'cartItem/ADD_ITEMS';
const ADD_ITEM = 'cartItem/ADD_ITEM';
const REMOVE_ITEM = 'cartItem/REMOVE_ITEM';
const UPDATE_COUNT = 'cartItem/UPDATE_COUNT';

export const addItems = productId => ({
  type: ADD_ITEMS,
  productId
});

export const addItem = productId => ({
  type: ADD_ITEM,
  productId
});

export const removeItem = productId => ({
  type: REMOVE_ITEM,
  productId
})

// export const updateCount = (itemId, count) => {
//   if (count < 1) return removeItem(itemId);

//   return {
//     type: UPDATE_COUNT,
//     itemId,
//     count
//   }
// }

export const loadCartItems = state => {
  return state.cartItems ? Object.values(state.cartItems) : [];
}

export const loadCartItem = productId => state => {
  return state.loadCartItems ? state.cartItems[productId] : null;
}

export const fetchCartItems = () => async dispatch => {
  const res = await csrfFetch(`api/cart_items`);
  const cartItems = await res.json();
  dispatch(addItems(cartItems));
}

export const createCartItem = cartData => async dispatch => {
  const res = await csrfFetch(`api/cart_items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(cartData)
  });

  const newCartItem = await res.json();
  dispatch(addItem(newCartItem));
}

export const updateCartItem = cartData => async dispatch => {
  const res = await csrfFetch(`api/cart_items/${cartData.cartItem.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(cartData)
  });

  const updatedCartItem = await res.json();
  dispatch(addItem(updatedCartItem));
}

export const removeCartItem = (cartItemId, productId) => async dispatch => {
  const res = await csrfFetch(`api/cart_items/${cartItemId}`, {
    method: 'DELETE',
  });

  dispatch(removeItem(productId));
}

