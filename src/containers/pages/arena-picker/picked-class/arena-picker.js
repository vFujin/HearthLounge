import React, { Component } from 'react';
import {hs_class} from '../../../data/card-filters';
import { Link } from 'react-router'
import {PickedClass} from './right-container/after-class-pick';
export class ArenaPicker extends Component {
  constructor(props){
    super(props);
    this.state = {displayNone: 'displayNone', displayInlineFlex: 'displayInlineFlex'};
  }
  handleClick() {
    let displayNone = this.state.displayNone === 'displayNone' ? 'displayInlineFlex' : 'displayNone';
    let displayInlineFlex = this.state.displayInlineFlex=== 'displayInlineFlex' ? 'displayNone' : 'displayInlineFlex';
    this.setState({displayNone: displayNone, displayInlineFlex: displayInlineFlex});
  }
  render() {
    return (
        <div className="pageContainer arena-picker">
          <table onClick={this.handleClick.bind(this)} className={`pick-class ${this.state.displayInlineFlex}`}>
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
          <PickedClass display={this.state.displayNone}/>
        </div>
    );
  }
}