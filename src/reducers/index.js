import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";
import customerReducer from "./customerReducers";
import admiReducer from "./admiReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  product: productReducer,
  cart: cartReducer,
  item: itemReducer,
  customers: customerReducer,
  admi: admiReducer,
});
