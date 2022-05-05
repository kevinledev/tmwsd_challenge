import { combineReducers } from "redux";
import messages from "./messages_reducer";

const RootReducer = combineReducers({
  messages,
});

export default RootReducer;
