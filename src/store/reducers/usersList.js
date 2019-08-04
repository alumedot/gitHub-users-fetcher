import * as actionTypes from '../actions/actionTypes';
import {objectUpdate} from '../utility';

const initialState = {
  users: null,
  error: null,
};

const setUsers = (state, action) => {
  return objectUpdate(state,{users: action.users, error: false});
};

const fetchUsersFailed = (state, action) => {
  return objectUpdate(state, {error: action.error});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS: return setUsers(state, action);
    case actionTypes.FETCH_USERS_FAILED: return fetchUsersFailed(state, action);
    default: return state;
  }
};

export default reducer;