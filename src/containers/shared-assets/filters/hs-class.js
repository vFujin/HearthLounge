import React, { Component } from 'react';
import {Link} from 'react-router';
import {hs_class} from '../../../data/filters';

export class HsClassFilter extends Component {

  render() {
    return (
       <ul className={`topbar-${this.props.align}`}>
         {console.log(this.props.params)}
          {hs_class.map((element, index) =>
              <li key={index}>
                <Link to={`${this.props.page}?class=${element.url}`}>
                  <span className={`hs-icon icon-${element.url}`}></span>
                  <div className="tooltip">
                    <div className="caret-up"></div>
                    <p>{element.name}</p>
                  </div>
                </Link>
              </li>
          )}
        </ul>
    );
  }
}