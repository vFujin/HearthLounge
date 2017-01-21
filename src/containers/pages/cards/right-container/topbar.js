import React, { Component } from 'react';
import {ManaCostFilter} from '../filters/mana-cost';
import {HsClassFilter} from  '../filters/hs-class';

export class Topbar extends Component {
  render() {
    return (
        <div className="topbar">
          <ManaCostFilter handleFilterClick={this.props.handleFilterClick}
                          manaFilter={this.props.manaFilter}/>
          <HsClassFilter handleFilterClick={this.props.handleFilterClick}
                          hsClass={this.props.hsClass}/>
        </div>
    );
  }
}