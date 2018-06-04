import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {icon_filters} from '../../../../globals/filters';
import Icon from "../../../../components/icon";

const Sidebar = ({extensionType}) => {

  const listExtensions = () =>{
    return (
      icon_filters[extensionType].map((extension, index) =>
        <li key={index} className={extensionType === extension.url ? 'selected' : undefined}>
          <Link to={`/extensions/${extension.url}/overview`}
                className={`${extension.url} ${extensionType === extension.url ? 'active' : undefined}`}>
            <Icon name={extension.url} />
            <p>{extension.name}</p>
          </Link>
        </li>
      )
    )
  };

  return (
    <div className="sidebar container__extension-list">
      <ul className="sidebar__body sidebar__body--extensions">
        {listExtensions()}
      </ul>
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  extensionType: PropTypes.string.isRequired
};
