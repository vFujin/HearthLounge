import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {icon_filters} from '../../../../globals/filters';
import Icon from "../../../../components/icon";

const Sidebar = ({expansion}) => {

  const listExpansions = () => {
    return icon_filters.expansions.map((e, index) =>
        <li key={index} className={expansion === e.url ? 'selected' : undefined}>
          <Link to={`/expansions/${e.url}/overview`}
                className={`${e.url} ${expansion === e.url && 'active'}`}>
            <Icon name={e.url} />
            <p>{e.name}</p>
          </Link>
        </li>
    )
  };

  return (
      <div className="sidebar container__extension-list">
        <ul className="sidebar__body sidebar__body--extensions">
          {listExpansions()}
        </ul>
      </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  expansion: PropTypes.string
};
