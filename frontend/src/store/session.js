import csrfFetch from "./csrf";

export const SET_CURRENT_USER = 'session/SET_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'session/REMOVE_CURRENT_USER';

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER,
})

const storeCSRFToken = response => {
  const csrfToken = response.headers.get('X-CSRF-Token');
  
  if (csrfToken) {
    sessionStorage.setItem('X-CSRF-Token', csrfToken);
  }
}

const storeCurrentUser = user => {
  if (user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    sessionStorage.removeItem('currentUser');
  }
}

export const login = ({email, password}) => async dispatch => {
  const response = await csrfFetch(`/api/session`, {
    method: 'POST',
    body: JSON.stringify({email: email, password: password})
  });

  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
}

export const restoreSession = () => async dispatch => {
  const response = await csrfFetch("/api/session");
  storeCSRFToken(response);
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE"
  });

  storeCurrentUser(null);
  dispatch(removeCurrentUser());
  return response;
};

export const signup = ({email, name, password}) => async (dispatch) => {
  const response = await csrfFetch(`/api/users`, {
    method: 'POST',
    body: JSON.stringify({email: email, name: name, password: password})
  });

  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
}

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {...state, user: action.user};
    case REMOVE_CURRENT_USER:
      return {...state, user: null};
    default:
      return state;
  }
}

export default sessionReducer;