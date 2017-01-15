import React, { Component } from 'react';
import HsClassFilter from '../filters/hs-class';
import CreateDeck from './create-deck';
export class Topbar extends Component {
  render() {
    return (
        <div className={`topbar`}>
          <div className={`filters ${this.props.topbarFilters}`}>
            <HsClassFilter/>
            <CreateDeck/>
          </div>
        </div>
    );
  }
}