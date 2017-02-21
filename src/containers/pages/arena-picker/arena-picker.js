import React, { Component } from 'react';
import {hs_class} from '../../../data/filters';
import { Link } from 'react-router'
import {PickedClass} from './picked-class/right-container/choosen-class-view';
import {ClassSelection} from './class-selection';
export class ArenaPicker extends Component {
  constructor(props){
    super(props);
    this.state = {displayNone: 'displayNone', displayInlineFlex: 'displayInlineFlex'};
  }
  handleClassSelectionClick() {
    let displayNone = this.state.displayNone === 'displayNone' ? 'displayInlineFlex' : 'displayInlineFlex';
    let displayInlineFlex = this.state.displayInlineFlex === 'displayInlineFlex' ? 'displayNone' : 'displayNone';
    // this.setState({displayNone: displayNone, displayInlineFlex: displayInlineFlex});
  }
  render() {
      return (
        <div className="pageContainer arena-picker">
           <ClassSelection handleClassSelectionClick={this.handleClassSelectionClick.bind(this)} displayInlineFlex={this.state.displayInlineFlex}/>
          {this.props.children}
        </div>
      );
  }
}