import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Topbar = ({details, expansion}) => {
  const {expansion_topbar_tabs} = expansion;
  const listExpansionDetailTabs = () =>{
    return expansion_topbar_tabs.map((detail, index) =>
        <li key={index} className={`${expansion.url} ${details === detail.url && 'active'}`}>
          <Link to={`/expansions/${expansion.url}/${detail.url}`}>
            {detail.name}
          </Link>
        </li>
      );
  };

  return (
      <div className='topbar'>
        <ul className="topbar__extension-navigation">
          {listExpansionDetailTabs()}
        </ul>
      </div>
  );
};


export default Topbar;

Topbar.propTypes = {
  details: PropTypes.string.isRequired,
  expansion: PropTypes.object.isRequired
};