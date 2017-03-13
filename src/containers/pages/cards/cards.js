import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {Sidebar} from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';

export class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardName: null,
      statistics: null,
      faction: null,
      race: null,
      mechanics: null,
      dust: null,
      url: ''
    }
  }


  handleInputFilter(selector, val){
    this.setState({
      [selector]: val
    });
  }


  render() {
    return (
        <div className="pageContainer cards">
            <div className="left-container">
                <Sidebar handleInputFilter={this.handleInputFilter.bind(this)}
                         statistics={this.state.statistics}
                         race={this.state.race}
                         mechanics={this.state.mechanics}
                         dust={this.state.dust}/>
            </div>
            <div className="right-container">
                <CardsTopbarFilters query={this.props.location.query}/>
                {this.props.children}
            </div>
        </div>
    );
  }
}