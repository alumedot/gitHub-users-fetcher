import * as actionTypes from '../actions/actionTypes';
import {objectUpdate} from '../utility';

const initialState = {
  loadedUser: null,
  error: null,
  loading: false,
};

const fetchUserCardStart = (state, action) => {
  return objectUpdate(state, {loading: true});
};

const setUserCard = (state, action) => {
  return objectUpdate(state, {
    loadedUser: action.loadedUser,
    error: false,
    loading: false,
  });
};

const fetchUserCardFailed = (state, action) => {
  return objectUpdate(state, {error: action.error, loading: false});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_CARD: return setUserCard(state, action);
    case actionTypes.FETCH_USER_CARD_FAILED: return fetchUserCardFailed(state, action);
    case actionTypes.FETCH_USER_CARD_START: return fetchUserCardStart(state, action);
    default: return state;
  }
};

export default reducer;