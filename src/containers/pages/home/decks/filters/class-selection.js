import React, { Component } from 'react';
import { hs_class } from '../../../../../data/filters';
export class ClassSelection extends Component {
  render() {
    return (
        <ul className="class-selection">
          {hs_class.map( (element, index) =>
              <li key={index} className={element.url}><span className={"hs-icon icon-"+element.url}></span></li>
          )}
        </ul>
    );
  }
}