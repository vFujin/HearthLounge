import React from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import PrivacyPolicy from './privacy-policy/privacy-policy';
import NotFound from '../../../components/not-found/not-found';
import TermsOfService from './terms-of-service/terms-of-service';
import Welcome from '../welcome/welcome';

const misc = [
  'welcome',
  'terms-of-service',
  'privacy-policy',
  // "rank-system",
  // "FAQ",
  // "contributing",
];

const components = {
  Welcome,
  PrivacyPolicy,
  TermsOfService,
};

const Miscellaneous = ({ match }) => {
  const casedParam = _.startCase(match.params.misc).replace(/\s/g, '');

  if (!misc.includes(match.params.misc)) {
    return <NotFound page={match.params.misc} />;
  }

  document.title = _.startCase(match.params.misc);

  const mapMisc = () => {
    return misc.map(m => (
      <li key={m}>
        <NavLink to={`/${_.toLower(_.kebabCase(m))}`} activeClassName="active">
          {_.startCase(m)}
        </NavLink>
      </li>
    ));
  };

  return (
    <div className="container__page container__page--twoSidedCentralized miscellaneous">
      <div className="sidebar">
        <h2>Miscellaneous</h2>
        <ul>{mapMisc()}</ul>
      </div>

      {misc.map(
        m =>
          m === match.params.misc && (
            <Route to={`${m}`} key={m} component={components[casedParam]} />
          )
      )}
    </div>
  );
};

export default Miscellaneous;
