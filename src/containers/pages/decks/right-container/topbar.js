import React, { Component } from 'react';
import HsClassFilter from '../filters/hs-class';
export class Topbar extends Component {
  render() {
    return (
        <div className="topbar">
          <HsClassFilter/>
        </div>
    );
  }
}