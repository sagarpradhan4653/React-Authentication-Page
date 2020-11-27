import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import MasterReducer from './Component/Reducer/MasterReducer';

const init = {
  userDetails: {
    tokenKey: null,
    expireTime: ''
  }

}

const store = createStore(MasterReducer, init)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

