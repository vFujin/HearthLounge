import React from 'react';
import {App} from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducers} from '../redux/reducers';
import '../styles/index.css';
export const Root = () => {
  return (
      <Provider store={createStore(reducers)}>
        <App/>
      </Provider>
  );
};

export default Root;