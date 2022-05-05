import * as APIUtil from "../util/messages_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

const receiveMessages = messages => {
  return{
    type: RECEIVE_MESSAGES,
    messages
  }
}

const receiveMessage = message => {
  return{
    type: RECEIVE_MESSAGE,
    message
  }
}

const removeMessage = messageId => {
  return{
    type: REMOVE_MESSAGE,
    messageId
  }
}


// thunk actions

export const getAllMessages = () => (dispatch) => {
  return APIUtil.getAllMessages().then((messages) =>
    dispatch(receiveMessages(messages))
  );
};

export const getOneMessage = (messageId) => (dispatch) => {
  return APIUtil.getOneMessage(messageId).then((message) =>
    dispatch(receiveMessage(message))
  );
};

export const createMessage = (message) => (dispatch) => {
  return APIUtil.createMessage(message)
    .then((message) => dispatch(receiveMessage(message)))
};

export const deleteMessage = (messageId) => (dispatch) => {
  return APIUtil.deleteMessage(messageId).then(() =>
    dispatch(removeMessage(messageId))
  );
};
