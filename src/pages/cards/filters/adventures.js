import React, { Component } from 'react';
import {adventures} from '../data.filters';

export class AdventureFilter extends Component {
  render() {
    return (
        <div>
          <h3>Przygody</h3>
          <ul className="">
            {adventures.map((element, index) =>
                <li className={element} value={element} key={index}>
                  <span className={`hs icon-${element}`}></span>
                </li>
            )}
          </ul>
        </div>
    );
  }
}