import React from 'react';
import {Link} from 'react-router';
import {adventures} from '../../../../data/filters';

const Sidebar = props => {
  const {adventure} = props;

  const listAdventures = () =>{
    return (
      adventures.map((a, index) =>
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
      <div className="sidebar">
        <h3 className="filter-header">Adventures</h3>
        <ul className="sidebar-icons">
          {listAdventures()}
        </ul>
      </div>
  );
};

Sidebar.propTypes = {
  adventure: React.PropTypes.string
};

export default Sidebar;