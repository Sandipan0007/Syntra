import { combineReducers } from "redux"; // for combining reducers have to import it.

import userReducer from "./user/user.reducer";

import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
