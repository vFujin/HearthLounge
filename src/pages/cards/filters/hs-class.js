import React, { Component } from 'react';
import {hs_class} from '../data.filters';

export class HsClassFilter extends Component {
  render() {
    return (
        <ul className="topbar-right">
          {hs_class.map((element, index) =>
              <li className={element} value={element} key={index}>
                <span className={`hs icon-${element}`}></span>
              </li>
          )}
        </ul>
    );
  }
}