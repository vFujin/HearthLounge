import React, { Component } from 'react';
import {ManaCostFilter} from '../filters/mana-cost';
import {HsClassFilter} from  '../filters/hs-class';

export class Topbar extends Component {
  render() {
    return (
        <div className="topbar">
          <ManaCostFilter handleManaFilterClick={this.props.handleManaFilterClick}
                          manaFilter={this.props.manaFilter}/>
          <HsClassFilter/>
        </div>
    );
  }
}