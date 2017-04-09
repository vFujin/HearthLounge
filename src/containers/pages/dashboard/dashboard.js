import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Sidebar from './left-container/sidebar';
import {Topbar} from './right-container/topbar'

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }
  componentWillMount(){
    if(this.props.authed === false){
      browserHistory.push('/sign-in');
    }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({
      user: nextProps.user
    })
  }


  render(){

    return (
        <div className="container__page container__page--twoSided dashboard">
          <div className="container__page--inner container__page--left">
            {this.props.authed}
            <Sidebar user={this.props.user}/>
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar/>
          </div>
        </div>
    )
  }
}


