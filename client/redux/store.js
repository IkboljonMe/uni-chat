import { createStore } from "redux";

import userReducer from "./userReducer"; // Assuming you have a separate file for the user reducer

const store = createStore(userReducer);
export default store;
