import React, { Component } from 'react';
import {Link} from 'react-router';
import {hs_class} from '../../../../data/filters';

export class HsClassFilter extends Component {
  render() {
    return (
       <ul className="topbar-right">
          {hs_class.map((element, index) =>
              <li value={element.en} key={index}>
                <Link to={`cards?class=${element.en}`}>
                  <span className={`hs icon-${element.en}`}></span>
                </Link>
              </li>
          )}
        </ul>
    );
  }
}