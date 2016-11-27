import React, { Component } from 'react';
import {expansions} from '../data.filters';

export class ExpansionFilter extends Component {
  render() {
    return (
        <div>
          <h3>Dodatki</h3>
          <ul className="">
            {expansions.map((element, index) =>
                <li className={element} value={element} key={index}>
                  <span className={`hs icon-${element}`}></span>
                </li>
            )}
          </ul>
        </div>
    );
  }
}