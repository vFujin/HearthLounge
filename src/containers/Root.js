import React from 'react';
import {App} from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducers} from '../redux/reducers/index';
import '../styles/index.css';
const Root = () => (
    <Provider store={createStore(reducers)}>
      <App/>
    </Provider>
);

export default Root;