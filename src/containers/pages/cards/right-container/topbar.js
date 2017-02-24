import React, { Component } from 'react';
import {ManaCostFilter} from '../filters/mana-cost';
import {HsClassFilter} from  '../filters/hs-class';

export class CardsTopbarFilters extends Component {
  render() {
    return (
        <div className="topbar">
          {this.props.children}
          <ManaCostFilter />
          {/*<HsClassFilter handleFilterClick={this.props.handleFilterClick}*/}
                          {/*hsClass={this.props.hsClass}/>*/}
        </div>
    );
  }
}