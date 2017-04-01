import React from 'react';
import {Link} from 'react-router';
import {icon_filters} from '../../../../data/filters';

const Sidebar = ({expansion}) => {

  const listExpansions = () =>{
    return (
      icon_filters.expansions.map((e, index) =>
        <li key={index}>
          <Link to={`/expansions/${e.url}/overview`}
                className={`${e.url} ${expansion === e.url && 'active'}`}>
            <span className={`hs-icon icon-${e.url}`}></span>
            <p>{e.name}</p>
          </Link>
        </li>
      )
    )
  };

  return (
      <div className="sidebar container__extension-list">
        <h3 className="sidebar__header">Expansions</h3>
        <ul className="sidebar__body">
          {listExpansions()}
        </ul>
      </div>
  );
};

Sidebar.propTypes = {
  expansion: React.PropTypes.string
};

export default Sidebar;