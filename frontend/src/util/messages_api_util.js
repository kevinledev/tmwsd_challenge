import axios from "axios";

export const getAllMessages = () => {
  return axios.get(`/messages`);
};

export const getOneMessage = (messageId) => {
  return axios.get(`/messages/${messageId}`);
};

export const createMessage = (message) => {
  return axios.post(`/messages/new`, message);
};

export const deleteMessage = (messageId) => {
  debugger
  return axios.delete(`/messages/${messageId}`);
};
