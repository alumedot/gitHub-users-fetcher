import * as actionTypes from './actionTypes';
import gitHub from '../../util/gitHub';

export const setUserCard = (user) => {
  return {
    type: actionTypes.SET_USER_CARD,
    loadedUser: user,
  }
};

export const fetchUserCardFailed = (error) => {
  return {
    type: actionTypes.FETCH_USER_CARD_FAILED,
    error: error,
  }
};

export const fetchUserCardStart = () => {
  return {
    type: actionTypes.FETCH_USER_CARD_START,
  }
};

export const fetchUser = (login) => {
  return async dispatch => {
    dispatch(fetchUserCardStart());
    const response = await gitHub.fetchUser(login);
    response.name !== 'Error' ? dispatch(setUserCard(response)) : dispatch(fetchUserCardFailed(response));
  }
};
