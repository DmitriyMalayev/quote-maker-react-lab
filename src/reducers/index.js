import { combineReducers } from "redux";
import quotes from "./quotes"

export default combineReducers({
  quotes: quotes,
});

//same as quotes: quotes
// combineReducers allows us to have separate functions to manage different slices of the store state so if we had multiple reducers we could put them in separate function in our folder and then combine them in index.
// Command failed with exit code 1
