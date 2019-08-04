import * as actionTypes from './actionTypes';
import gitHub from '../../util/gitHub';

export const fetchRepoReadmeStart = () => {
  return {
    type: actionTypes.FETCH_REPO_README_START,
  }
};

export const setRepoReadme = (readme) => {
  return {
    type: actionTypes.SET_REPO_README,
    readme: readme,
  }
};

export const fetchRepoReadmeFailed = (error) => {
  return {
    type: actionTypes.FETCH_REPO_README_FAILED,
    error: error,
  }
};

export const fetchRepoReadme = (login, name) => {
  return async dispatch => {
    dispatch(fetchRepoReadmeStart());
    const response = await gitHub.fetchRepoReadme(login, name);
    response.name !== 'Error' ? dispatch(setRepoReadme(response)) : dispatch(fetchRepoReadmeFailed(response));
  }
};

export const fetchRepoContentStart = () => {
  return {
    type: actionTypes.FETCH_REPO_CONTENT_START,
  }
};

export const setRepoContent = (content) => {
  return {
    type: actionTypes.SET_REPO_CONTENT,
    repo: content,
  }
};

export const fetchRepoContentFailed = (error) => {
  return {
    type: actionTypes.FETCH_REPO_CONTENT_FAILED,
    error: error,
  }
};

export const fetchRepoContent = (login, name) => {
  return async dispatch => {
    dispatch(fetchRepoContentStart());
    const response = await gitHub.fetchRepoContent(login, name);
    response.name !== 'Error' ? dispatch(setRepoContent(response)) : dispatch(fetchRepoContentFailed(response));
  }
};