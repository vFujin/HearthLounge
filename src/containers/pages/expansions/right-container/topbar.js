import React from 'react';
import { Link } from 'react-router';
import { topbar_tabs } from '../../../../data/expansion-details';

const Topbar = props => {
  const {details, expansion} = props;

  const listExpansionDetailTabs = topbar_tabs =>{
    return (
        topbar_tabs.expansion_topbar_tabs.map((element, index) =>
        <li key={index}
            className={`${expansion} ${details === element.url && 'active'}`}>
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
            <ul className={`${expansion === element.expansion && 'active'}-view topbar__extension-navigation`}
                key={index}>
              {listExpansionDetailTabs(element)}
            </ul>
        )}
      </div>
  );
};

Topbar.propTypes = {
  details: React.PropTypes.string.isRequired,
  expansion: React.PropTypes.string.isRequired
};

export default Topbar;