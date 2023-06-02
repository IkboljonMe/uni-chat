import * as userActions from "../actions/userActions";

const jsonUSER = localStorage.getItem("USER");
let USER = null;
if (jsonUSER) {
  USER = JSON.parse(jsonUSER);
}

const initialState = USER;
console.log("Redux", initialState);
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      return action.payload;
    case userActions.CLEAR_USER:
      return null;
    default:
      return state;
  }
};
export default userReducer;
