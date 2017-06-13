import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
const tabmenu = ["hot", "new", "rising", "controversial", "top"];

const Sidebar = () => {
  return (
      <div className="sidebar__body">
        {tabmenu.map(el => {
          return (
              <button key={el} id={el} onClick={(e) => this.props.handleTabmenuClick(e)}>
                <Link activeClassName="active" to={{pathname: 'reddit', query: {category: el}}}>{el}</Link>
              </button>
          )
        })}
      </div>
  )
};

export default Sidebar;

Sidebar.propTypes = {
  handleTabmenuClick: PropTypes.func
};
