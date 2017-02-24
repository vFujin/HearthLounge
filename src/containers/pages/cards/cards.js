import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {Sidebar} from './left-container/sidebar';
import {CardsTopbarFilters} from './right-container/topbar';
export class Cards extends Component {
  render() {
    return (
        <div className="pageContainer cards">
            <div className="left-container">
                <Sidebar />
            </div>
            <div className="right-container">
                <CardsTopbarFilters />
                {this.props.children}
            </div>
        </div>
    );
  }
}