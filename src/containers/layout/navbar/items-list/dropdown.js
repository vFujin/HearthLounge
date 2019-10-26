import React from 'react';
import PropTypes from 'prop-types';
import { navItems } from '../../../../globals/nav';
import { NavLink } from 'react-router-dom';
import Icon from '../../../../components/icon';

const Dropdown = ({ element, index }) => {
  const listSubmenu = (index, el, sub) => {
    return navItems[index].submenu.map((item, id) => (
      <li className={sub[id].url} key={id}>
        <NavLink
          to={`/${el.name}/${item.url}${el.url === 'decks' ? '' : '/overview'}`}
        >
          <Icon name={sub[id].url} className="submenu__icon" />
          <div className="icon-label">{sub[id].name}</div>
        </NavLink>
      </li>
    ));
  };

  if (!element.hasOwnProperty('submenu')) return null;
  return (
    <ul className="submenu">{listSubmenu(index, element, element.submenu)}</ul>
  );
};

Dropdown.propTypes = {
  element: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

Dropdown.defaultProps = {
  element: undefined,
  index: undefined,
};

export default Dropdown;
