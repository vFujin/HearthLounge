import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {ManaCostFilter} from './filters/mana-cost';
import {HsClassFilter} from  './filters/hs-class';

export class Topbar extends Component {
  render() {
    return (
        <div className="topbar">
          <ManaCostFilter/>
          <HsClassFilter/>
        </div>
    );
  }
}