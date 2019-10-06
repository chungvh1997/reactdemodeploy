import { combineReducers } from "redux";
import newsReducer from "./news.reducer";

const appReducers = combineReducers({
  newsReducer
});

export default appReducers;
