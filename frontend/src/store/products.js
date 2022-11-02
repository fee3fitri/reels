import csrfFetch from "./csrf";

const GET_PRODUCTS = 'products/GET_PRODUCTS';
const GET_PRODUCT = 'products/GET_PRODUCT';

export const getProducts = products => ({
  type: GET_PRODUCTS,
  products
})

export const getProduct = product => ({
  type: GET_PRODUCT,
  product
})

export const loadProducts = state => {
  return state.products ? Object.values(state.products) : [];
}

export const loadProduct = productId => state => {
  return state.products ? state.products[productId] : null;
}


export const fetchProducts = () => async dispatch => {
  const res = await csrfFetch(`/api/products`);
  const products = await res.json();
  dispatch(getProducts(products));
}

export const fetchProduct = productId => async dispatch => {
  const res = await csrfFetch(`/api/products/${productId}`);
  const product = await res.json();
  dispatch(getProducts(product));
}

export const searchProduct = query => async dispatch => {
  const res = await csrfFetch(`/api/products/${query}`);
  if (res.status >= 400) throw res;

  if (res.ok) {
    const products = await res.json();
    dispatch(getProducts(products));
  }
}

const productsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case GET_PRODUCTS:
      return action.products;
    case GET_PRODUCT:
      return {...state, ...action.product};
    default:
      return state;
  }
}

export default productsReducer;