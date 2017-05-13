import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Router';
import './styles/index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers/index';
let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>,
  document.getElementById('root')
);