import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar'
import Loader from '../../../utils/loader';

export class Dashboard extends Component{

  componentWillReceiveProps(nextProps){
    if(nextProps.authenticated === false){
      browserHistory.push('/sign-in');
    }
  }


  isAuthed(){
    if(this.props.activeUser){
      return (
          <div className="container__page container__page--twoSided dashboard">
            <div className="container__page--inner container__page--left">
              <Sidebar user={this.props.activeUser}/>
            </div>
            <div className="container__page--inner container__page--right">
              <Topbar/>
            </div>
          </div>
      )
    }
    else{
      return <div className="container__page"><Loader/></div>;
    }
  }

  render(){
    return this.isAuthed();
  }
}


