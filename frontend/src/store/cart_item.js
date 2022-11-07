import csrfFetch from "./csrf";

const ADD_ITEMS = 'cartItem/ADD_ITEMS';
const ADD_ITEM = 'cartItem/ADD_ITEM';
const REMOVE_ITEM = 'cartItem/REMOVE_ITEM';
const UPDATE_COUNT = 'cartItem/UPDATE_COUNT';
const RESET = 'cartItem/RESET';

// ACTIONS
export const addItems = items => ({
  type: ADD_ITEMS,
  items
});

export const addItem = item => ({
  type: ADD_ITEM,
  item
});

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  itemId
})

export const updateCount = (itemId, count) => ({
  type: updateCount,
  itemId,
  count
}) 

export const reset = () => {
  return {
    type: RESET
  };
};

// SELECTORS
export const loadCartItems = state => {
  return state.cartItems ? Object.values(state.cartItems) : [];
}

export const loadCartItem = productId => state => {
  return state.cartItems ? state.cartItems[productId] : null;
}

export const getCartOrder = state => state.cart.order; 


// THUNK
export const fetchCartItems = (userId) => async dispatch => {
  const res = await csrfFetch(`/api/cart_items?userId=${userId}`);
  const cartItems = await res.json();
  dispatch(addItems(cartItems));
}

export const createCartItem = cartData => async dispatch => {
  const res = await csrfFetch(`/api/cart_items`, {
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
  const res = await csrfFetch(`/api/cart_items/${cartData.cart_item.id}`, {
    method: 'PATCH',
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
  const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
    method: 'DELETE',
  });

  dispatch(removeItem(productId));
}


// REDUCERS
const cartReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case ADD_ITEMS:
      return action.items
    case ADD_ITEM:
      return {...state, ...action.item}
    case REMOVE_ITEM:
      const nextState = {
        ...state, 
        items: { ...state.items }
      }
      delete nextState.items[action.itemId];
      return nextState;
    case UPDATE_COUNT:
      return {
        ...state, 
        items: {
          [action.itemId]: {
            ...state[action.itemId],
            count: action.count
          }
        }}
    case RESET:
      return state;
    default:
      return state;
  }
}

export default cartReducer;