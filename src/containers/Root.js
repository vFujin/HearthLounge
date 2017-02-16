import React from 'react';
import {App} from './Router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducers} from '../redux/reducers/index';
import '../styles/index.css';
const store = createStore(reducers);
const Root = () => (
    <Provider store={store}>
      <App/>
    </Provider>
);

export default Root;