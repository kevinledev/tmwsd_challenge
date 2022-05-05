import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// We will create this component shortly
import Root from './components/Root';

// We set this up in the last section
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store;

 
    // If this is a first time user, start with an empty store
    store = configureStore({});

  // Render our root component and pass in the store as a prop
  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();