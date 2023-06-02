import * as userActions from "../actions/userActions";
export const setUser = (user) => {
  return {
    type: userActions.SET_USER,
    payload: user,
  };
};
