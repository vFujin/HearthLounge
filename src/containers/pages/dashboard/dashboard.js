import React, {PureComponent} from 'react';
import {browserHistory} from 'react-router';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar'
import Content from './right-container/content';
import Loader from '../../../components/loader';

export class Dashboard extends PureComponent{

  componentWillReceiveProps(nextProps){
    if(nextProps.authenticated === false){
      browserHistory.push('/sign-in');
    }
  }
  isAuthed(){
    console.log(this.props.activeUser)
    if(this.props.activeUser !== null){

      return (
          <div className="container__page container__page--twoSided dashboard">
            <div className="container__page--inner container__page--left">
              <Sidebar user={this.props.activeUser}/>
            </div>
            <div className="container__page--inner container__page--right">
              <Topbar/>
              <Content />
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


