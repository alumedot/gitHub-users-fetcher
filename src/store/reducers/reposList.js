import * as actionTypes from '../actions/actionTypes';
import {objectUpdate} from '../utility';

const initialState = {
  repos: null,
  error: null,
  loading: false,
};

const fetchReposStart = (state, action) => {
  return objectUpdate(state, {loading: true});
};

const setRepos = (state, action) => {
  return objectUpdate(state, {repos: action.repos, loading: false})
};

const fetchReposFailed = (state, action) => {
  return objectUpdate(state, {error: action.error, loading: false});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPOS_START: return fetchReposStart(state, action);
    case actionTypes.SET_REPOS: return setRepos(state, action);
    case actionTypes.FETCH_REPOS_FAILED: return fetchReposFailed(state, action);
    default: return state;
  }
};

export default reducer;