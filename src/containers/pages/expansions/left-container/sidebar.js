import React from 'react';
import {Link} from 'react-router';
import {expansions} from '../../../../data/filters';

const Sidebar = props => {
  const {expansion} = props;

  const listExpansions = () =>{
    return (
      expansions.map((e, index) =>
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
      <div className="sidebar">
        <h3 className="filter-header">Expansions</h3>
        <ul className="sidebar-icons">
          {listExpansions()}
        </ul>
      </div>
  );
};

Sidebar.propTypes = {
  expansion: React.PropTypes.string.isRequired
};

export default Sidebar;