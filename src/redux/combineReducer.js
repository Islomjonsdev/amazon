import { combineReducers } from "redux";
import { cartReducer } from "./reducer";
const joinedReducer = combineReducers({
    cart: cartReducer
});

export default joinedReducer