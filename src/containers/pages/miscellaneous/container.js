import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import _ from 'lodash';
const misc = [
    "terms of service",
    "privacy policy",
    "rank system",
    "FAQ",
    "contributing",
];

const Miscellaneous = ({children}) =>{

  const mapMisc = () =>{
    return misc.map(m => <li><Link to={`/${_.toLower(_.kebabCase(m))}`} activeClassName="active">{_.startCase(m)}</Link></li>)
  };

  return (
      <div className="container__page container__page--twoSidedCentralized miscellaneous">
        <div className="sidebar">
          <h2>Miscellaneous</h2>
          <ul>
            {mapMisc()}
          </ul>
        </div>
        {children}
      </div>
  )
};

export default Miscellaneous;

Miscellaneous.propTypes = {
  children: PropTypes.element.isRequired
};