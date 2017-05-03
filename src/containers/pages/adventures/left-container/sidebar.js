import React from 'react';
import {Link} from 'react-router';
import {icon_filters} from '../../../../data/filters';

const Sidebar = props => {
  const {adventure} = props;

  const listAdventures = () =>{
    return (
      icon_filters.adventures.map((a, index) =>
        <li key={index}>
          <Link to={`/adventures/${a.url}/overview`}
                className={`${a.url} ${adventure === a.url && 'active'}`}>
            <span className={`hs-icon icon-${a.url}`}></span>
            <p>{a.name}</p>
          </Link>
        </li>
      )
    )
  };

  return (
      <div className="sidebar container__extension-list">
        <h3 className="sidebar__header">Adventures</h3>
        <ul className="sidebar__body">
          {listAdventures()}
        </ul>
      </div>
  );
};

Sidebar.propTypes = {
  adventure: React.PropTypes.string
};

export default Sidebar;