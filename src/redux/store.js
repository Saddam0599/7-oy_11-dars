import {createStore} from "redux";
import rootReducer from "./reducers";
// import appReducer from './reducer'


const store = createStore (rootReducer);

export default store;