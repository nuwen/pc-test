import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store/index'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './styles/base.css';
import App from './App';
import Container from '@material-ui/core/Container';

ReactDOM.render(
  <Provider store={store}>
    <Container maxWidth="sm">
    <App />
    </Container>
  </Provider>
, document.getElementById('root'));

serviceWorker.register();