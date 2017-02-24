import React, { Component } from 'react';
import {hs_class} from '../../../data/filters';
import { Link } from 'react-router'
export class ClassSelection extends Component {
  render() {
    return (
        <div className="class-selection">
          <table className={`pick-class`}>
            <tbody>
            <tr>
              <th colSpan="3">Wybierz klasę</th>
            </tr>
            <tr>
              {hs_class.slice(0, 3).map((element, index) =>

                  <td key={index} className={element.en}>
                    <Link to={`/arena-picker/${element.url}`}>
                      <div className="wrapper">
                        <span className={`hs-icon icon-${element.en}`}></span>
                        <p>{element.pl}</p>
                      </div>
                    </Link>
                  </td>

              )}
            </tr>
            <tr>
              {hs_class.slice(3, 6).map((element, index) =>
                  <td key={index} className={element.en}>
                    <Link to={`/arena-picker/${element.url}`}>
                      <div>
                        <span className={`hs-icon icon-${element.en}`}></span>
                        <p>{element.pl}</p>
                      </div>
                    </Link>
                  </td>
              )}
            </tr>
            <tr>
              {hs_class.slice(6, 9).map((element, index) =>
                  <td key={index} className={element.en}>
                    <Link to={`/arena-picker/${element.url}`}>
                      <div>
                        <span className={`hs-icon icon-${element.en}`}></span>
                        <p>{element.pl}</p>
                      </div>
                    </Link>
                  </td>
              )}
            </tr>
            </tbody>
          </table>


        </div>
    );
  }
}