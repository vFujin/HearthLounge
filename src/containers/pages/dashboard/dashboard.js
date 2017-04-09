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
    console.log(this.props)
    return (
        <div className="container__page container__page--twoSided dashboard">
          <div className="container__page--inner container__page--left">
            <Sidebar username={this.props.username} email={this.props.email}/>
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar/>
          </div>
        </div>
    )
  }
}


