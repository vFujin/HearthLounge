import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { topbar_tabs } from '../../../../data/expansion-details';

const Topbar = ({details, expansion}) => {

  const listExpansionDetailTabs = topbar_tabs =>{
    return (
        topbar_tabs.expansion_topbar_tabs.map((element, index) =>
        <li key={index} className={`${expansion} ${details === element.url && 'active'}`}>
          <Link to={`/expansions/${expansion}/${element.url}`}>
            {element.name}
          </Link>
        </li>
      )
    )
  };

  return (
      <div className='topbar'>
        {topbar_tabs.map((element, index) =>
            <ul key={index} className={`${expansion === element.expansion && 'active'}-view topbar__extension-navigation`}>
              {listExpansionDetailTabs(element)}
            </ul>
        )}
      </div>
  );
};


export default Topbar;

Topbar.propTypes = {
  details: PropTypes.string.isRequired,
  expansion: PropTypes.string.isRequired
};