import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import PrivacyPolicy from "./privacy-policy/privacy-policy";
import NotFound from "../../shared-assets/not-found";

const misc = [
    "terms-of-service",
    "privacy-policy",
    "rank-system",
    "FAQ",
    "contributing",
];

const components = {
  PrivacyPolicy
};

const Miscellaneous = ({match}) =>{
  const casedParam = _.startCase(match.params.misc).replace(/\s/g, '');

  if(!misc.includes(match.params.misc)){
    return <NotFound page={match.params.misc} redirect="/"/>
  }

  const mapMisc = () =>{
    return misc.map(m => <li key={m}><Link to={`/${_.toLower(_.kebabCase(m))}`} activeClassName="active">{_.startCase(m)}</Link></li>)
  };

  return (
      <div className="container__page container__page--twoSidedCentralized miscellaneous">
        <div className="sidebar">
          <h2>Miscellaneous</h2>
          <ul>
            {mapMisc()}
          </ul>
        </div>

        {misc.map(m => m === match.params.misc && <Route to={`${m}`} key={m} component={components[casedParam]} />)}
      </div>
  )
};

export default Miscellaneous;

Miscellaneous.propTypes = {
  children: PropTypes.element.isRequired
};