import * as actionTypes from '../actions/actionTypes';
import {objectUpdate} from '../utility';

const initialState = {
  repository: null,
  readme: null,
  errorContent: null,
  errorReadme: null,
  loadingContent: false,
  loadingReadme: false,
};

//actions with README file
const fetchRepoReadmeStart = (state, action) => {
  return objectUpdate(state, {loadingReadme: true})
};

const setRepoReadme = (state, action) => {
  return objectUpdate(state, {readme: action.readme, loadingReadme: false})
};

const fetchRepoReadmeFailed = (state, action) => {
  return objectUpdate(state, {errorReadme: action.error, loadingReadme: false, readme: null})
};


//actions with repository content
const fetchRepoContentStart = (state, action) => {
  return objectUpdate(state, {loadingContent: true});
};

const setRepoContent = (state, action) => {
  return objectUpdate(state, {repository: action.repo, loadingContent: false});
};

const fetchRepoContentFailed = (state, action) => {
  return objectUpdate(state, {errorContent: action.error, loadingContent: false});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPO_README_START: return fetchRepoReadmeStart(state, action);
    case actionTypes.SET_REPO_README: return setRepoReadme(state, action);
    case actionTypes.FETCH_REPO_README_FAILED: return fetchRepoReadmeFailed(state, action);
    case actionTypes.FETCH_REPO_CONTENT_START: return fetchRepoContentStart(state, action);
    case actionTypes.SET_REPO_CONTENT: return setRepoContent(state,action);
    case actionTypes.FETCH_REPO_CONTENT_FAILED: return fetchRepoContentFailed(state, action);
    default: return state;
  }
};

export default reducer;