import { combineReducers } from "redux";
import { adminReducer } from "./admin-reducer";
import { projectsReducer } from "./projects-reducer";

export const rootReducer = combineReducers({
  admin: adminReducer,
  projects: projectsReducer,
});