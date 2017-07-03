import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
const tabmenu = ["hot", "new", "rising", "controversial", "top"];

const Sidebar = ({category, handleCategoryClick}) => {
  return (
      <div className="sidebar__body">
        {tabmenu.map(el => {
          return (
              <button key={el} id={el} onClick={handleCategoryClick}>
                <Link className={category===el ? 'active' : ''}>{el}</Link>
              </button>
          )
        })}
      </div>
  )
};

export default Sidebar;

Sidebar.propTypes = {
  category: PropTypes.string.isRequired,
  handleTabmenuClick: PropTypes.func.isRequired
};
