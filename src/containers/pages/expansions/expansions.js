import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';
//
// import {connect} from 'react-redux';
// import {bindActionCreators, dispatch} from 'redux';
// import {selectExpansion} from '../../../redux/actions/expansions';

export class Expansions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expansion: ''
    }
  }

  handleExpansionSelectionClick(event) {
    let expansion = event.currentTarget.dataset['expansion'];
    this.setState({
      expansion: expansion
    })
  }


  render() {
    return (
        <div className="pageContainer expansions">
          <div className="left-container">
            <Sidebar onExpansionChange={this.handleExpansionSelectionClick.bind(this)} expansion={this.props.location.pathname.slice(12)}/>
          </div>
          <div className="right-container">
            {/*{React.Children.map(this.props.children, child => React.cloneElement(child, {expansion: this.state.expansion}))}*/}
            {this.props.children}

            </div>
          </div>
    );
  }
}