import { combineReducers } from "redux";
import { adminReducer } from "./admin-reducer";

export const rootReducer = combineReducers({
  admin: adminReducer,
});