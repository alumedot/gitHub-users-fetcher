import * as actionTypes from './actionTypes';
import gitHub from '../../util/gitHub';

export const fetchReposStart = () => {
  return {
    type: actionTypes.FETCH_REPOS_START,
  }
};

export const setRepos = (repos) => {
  return {
    type: actionTypes.SET_REPOS,
    repos: repos,
  };
};

export const fetchReposFailed = (error) => {
  return {
    type: actionTypes.FETCH_REPOS_FAILED,
    error: error,
  }
};

export const fetchRepos = (login) => {
  return async dispatch => {
    dispatch(fetchReposStart());
    const response = await gitHub.fetchRepos(login);
    response.name !== 'Error' ? dispatch(setRepos(response)) : dispatch(fetchReposFailed(response));
  }
};