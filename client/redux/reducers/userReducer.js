import * as userActions from "../actions/userActions";

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      return action.payload;
    default:
      return state;
  }
};
export default userReducer;
