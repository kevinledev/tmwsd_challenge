import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE,
} from "../actions/message_actions";

const MessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages.data;
    case RECEIVE_MESSAGE:
      return action.message.data;
    case REMOVE_MESSAGE:
      newState = Object.assign({}, state);
      delete newState[action.messageId];
      return newState;
    default:
      return state;
  }
};

export default MessagesReducer;
