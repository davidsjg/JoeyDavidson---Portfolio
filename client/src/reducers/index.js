import projectReducer from "./project";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  project: projectReducer,
});

export default allReducers;
