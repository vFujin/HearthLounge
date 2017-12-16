import React, {PureComponent} from 'react';
import {browserHistory} from 'react-router';
import Authenticated from './authenticated'
import Loader from '../../../components/loaders/loader';

export class Dashboard extends PureComponent{

  componentWillReceiveProps(nextProps){
    if(nextProps.authenticated === false){
      browserHistory.push('/sign-in');
    }
  }

  render(){
    return this.props.activeUser.authenticated ? <Authenticated /> : <div className="container__page"><Loader/></div>;
  }
}


