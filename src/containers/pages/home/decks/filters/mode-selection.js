import React, { Component } from 'react';
import {mode} from '../../../../../data/filters';
export class ModeSelection extends Component {

  listModes(){
    return mode.map(mode=>
      <li key={mode.name}>
        {console.log(mode)}
        <span className={`hs-icon icon-${mode.icon}`}></span>
        <p>{mode.name}</p>
      </li>
    )
  }

  render() {
    return (
        <ul className="mode-selection">
          {this.listModes()}
        </ul>
    );
  }
}