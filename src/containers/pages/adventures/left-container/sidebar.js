import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {icon_filters} from '../../../../globals/filters';
import Icon from "../../../../components/icon";

const Sidebar = ({adventure}) => {

  const listAdventures = () =>{
    return (
      icon_filters.adventures.map((a, index) =>
        <li key={index} className={adventure === a.url ? 'selected' : undefined}>
          <Link to={`/adventures/${a.url}/overview`}
                className={`${a.url} ${adventure === a.url ? 'active' : undefined}`}>
            <Icon name={a.url} />
            <p>{a.name}</p>
          </Link>
        </li>
      )
    )
  };

  return (
      <div className="sidebar container__extension-list">
        <ul className="sidebar__body sidebar__body--extensions">
          {listAdventures()}
        </ul>
      </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  adventure: PropTypes.string
};