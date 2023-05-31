import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './report-web-vitals';
import App from './app';
import { legacy_createStore as createStore } from "redux";
import userLoginReducer from './reducers/userReducers';
import { Provider } from 'react-redux';

const store = createStore(userLoginReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
