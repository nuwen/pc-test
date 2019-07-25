import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store/index'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

serviceWorker.register();