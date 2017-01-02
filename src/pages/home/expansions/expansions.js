import React, { Component } from 'react';
import { Link } from 'react-router';
import {ExpansionSlider} from './slider';
export class ExpansionsBlock extends Component {
  render() {
    return (
        <li className={'home__block expansions block-width-2'}>
          <Link to={'/dodatki'}>
            <div className="header">Dodatki</div>
          </Link>
          <div className="slider">
            <ul>
              <li>
                <img src="https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/home.expansion-slider/czarna_gora.jpg" alt="bm"/>
              </li>
            </ul>
            <div className="slider-nav">
              <div className="prev">&#10094;</div>
              <div className="next">&#10095;</div>
              <div className="bullets">
                <ul>
                  <li>&#8226;</li>
                </ul>
              </div>
            </div>
          </div>
        </li>
    );
  }
}