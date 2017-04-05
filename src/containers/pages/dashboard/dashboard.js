import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar'

export class Dashboard extends Component {
  componentWillReceiveProps(nextProps){
    if(!nextProps.authed){
      browserHistory.push('/sign-in');
    }
  }

  render(){

    return (
        <div className="container__page container__page--twoSided dashboard">
          <div className="container__page--inner container__page--left">
            {this.props.authed}
            <Sidebar/>
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar/>
          </div>
        </div>
    )
  }
}
