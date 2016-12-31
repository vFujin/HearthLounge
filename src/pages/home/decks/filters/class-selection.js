import React, { Component } from 'react';
import { hs_class } from '../../../../data/cards.filters';
export class ClassSelection extends Component {
  render() {
    return (
        <ul className="class-selection">
          {hs_class.map( (element, index) =>
              <li key={index} className={element.en}><span className={"hs-icon icon-"+element.en}></span></li>
          )}
        </ul>
    );
  }
}