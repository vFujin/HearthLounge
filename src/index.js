import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './containers/Router';
import './styles/index.css';
import * as firebase from 'firebase';
import {FirebaseConfig} from './keys';
firebase.initializeApp(FirebaseConfig);

ReactDOM.render(<App />,
  document.getElementById('root'));