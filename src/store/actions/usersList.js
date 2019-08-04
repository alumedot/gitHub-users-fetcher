import * as actionTypes from './actionTypes';
import gitHub from '../../util/gitHub';

export const setUsers = (users) => {
  return {
    type: actionTypes.SET_USERS,
    users: users,
  }
};

export const fetchUsersFailed = (error) => {
  return {
    type: actionTypes.FETCH_USERS_FAILED,
    error: error,
  };
};

export const fetchUsers = () => {
  return async dispatch => {
    const sinceListNum = Math.floor(Math.random() * 10000);
    const response = await gitHub.fetchUsers(sinceListNum);
    response.name !== 'Error' ? dispatch(setUsers(response)) : dispatch(fetchUsersFailed(response));
  };
};