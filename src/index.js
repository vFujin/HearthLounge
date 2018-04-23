import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./redux/root-reducer";
import rootSaga from "./redux/root-saga";
import App from "./containers/App";
import registerServiceWorker from './registerSerwiveWorker';
import "./styles/index.css";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
registerServiceWorker();