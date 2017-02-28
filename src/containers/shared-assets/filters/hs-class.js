import React, { Component } from 'react';
import {Link} from 'react-router';
import {hs_class} from '../../../data/filters';

const HsClassFilter = (props) => {
  const {align, page} = props;

  function listClasses(page) {
    return (
      hs_class.map((hs_class, index) =>
        <li key={index}>
          <Link to={`${page}?class=${hs_class.url}`}>
            <span className={`hs-icon ${hs_class.name} icon-${hs_class.url}`}></span>
            <div className="tooltip">
              <div className="caret-up"></div>
              <p>{hs_class.name}</p>
            </div>
          </Link>
        </li>
      ))
  }

  return (
      <ul className={`topbar-${align} hs-class-filter`}>
        {listClasses(page)}
      </ul>
  );
};

export default HsClassFilter;

HsClassFilter.propTypes = {
  align: React.PropTypes.string,
  page: React.PropTypes.string
};