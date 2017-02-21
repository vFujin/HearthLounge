import React from 'react';
import {App} from './Router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducers} from '../redux/reducers/index';
import '../styles/index.css';
/* eslint-disable no-underscore-dangle */
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */
const Root = () => (
    <Provider store={store}>
      <App/>
    </Provider>
);

export default Root;
