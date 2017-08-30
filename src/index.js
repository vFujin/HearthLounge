import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Router';
import './styles/index.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux/reducers/index';
import rootSaga from './redux/sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>,
  document.getElementById('root')
);