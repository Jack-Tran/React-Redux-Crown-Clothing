import { combineReducers } from "redux";

import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
