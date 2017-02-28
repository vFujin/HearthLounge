import React, { Component } from 'react';
import {Link} from 'react-router';
import {hs_class} from '../../../data/filters';

export class HsClassFilter extends Component {
  listClasses(page){
    return (
        hs_class.map((hs_class, index) =>
        <li key={index}>
          <Link to={`${page}?class=${hs_class.url}`}>
            <span className={`hs-icon icon-${hs_class.url}`}></span>
            <div className="tooltip">
              <div className="caret-up"></div>
              <p>{hs_class.name}</p>
            </div>
          </Link>
        </li>
    ))
  }

  render() {
    const {align, page} = this.props;
    return (
       <ul className={`topbar-${align} hs-class-filter`}>
          {this.listClasses(page)}
        </ul>
    );
  }
}

HsClassFilter.propTypes = {
  align: React.PropTypes.string,
  page: React.PropTypes.string
};