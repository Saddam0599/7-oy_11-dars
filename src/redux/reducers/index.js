import { combineReducers } from "redux";
// import languageReducer from "./languageReducer";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
  // language: languageReducer,
  auth: authReducer,
});

export default rootReducer;