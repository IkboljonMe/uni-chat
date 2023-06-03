import * as userActions from "../actions/userActions";

export const setUser = (user) => {
  return {
    type: userActions.SET_USER,
    payload: user,
  };
};
export const clearUser = () => {
  localStorage.removeItem("USER");
  return {
    type: userActions.CLEAR_USER,
  };
};
