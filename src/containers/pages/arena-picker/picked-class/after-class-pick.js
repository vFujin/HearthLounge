import React, { Component } from 'react';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
export class PickedClass extends Component {

  render() {
    return (
        <div className={`${this.props.display} arena-picker-wrapper`}>
          <div className="left-container">
            <Sidebar/>
          </div>
          <div className="right-container">
            <Topbar/>
            <ul className="card-selection">
              <li>
                <div className="card">
                  {/*api*/}
                </div>
                <input type="text" placeholder="Podaj nazwę pierwszej karty..."/>
              </li>
            </ul>
          </div>

        </div>
    );
  }
}