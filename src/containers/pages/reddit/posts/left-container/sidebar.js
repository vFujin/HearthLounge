import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const tabmenu = ["hot", "new", "rising", "controversial", "top"];

const Sidebar = ({category, domain, handleCategoryClick}) => {

  const to = (el) => domain ? `/reddit/posts/${el}/${domain}` : `/reddit/posts/${el}`;

  return (
      <div className="sidebar__body">
        {tabmenu.map(el => {
          return (
            <button key={el} id={el} onClick={handleCategoryClick}>
              <Link to={to(el)} className={category === el ? 'active' : ''}>{el}</Link>
            </button>
          )
        })}
      </div>
  )
};

export default Sidebar;

Sidebar.propTypes = {
  category: PropTypes.string,
  handleTabmenuClick: PropTypes.func
};
