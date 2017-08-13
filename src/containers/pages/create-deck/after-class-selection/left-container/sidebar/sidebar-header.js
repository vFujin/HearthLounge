import React from 'react';
import PropTypes from 'prop-types';

const SidebarHeader = ({filtersView, handleSidebarViewChange}) =>{
  let activeViewHeader = filtersView ? 'filters' : 'deck';
  let invertedActiveViewHeader = !filtersView ? 'filters' : 'deck';

  return (
      <h3 className="sidebar__header">
        <span>{activeViewHeader}</span>
        <button className="btn-pearl" onClick={handleSidebarViewChange}>Show {invertedActiveViewHeader}</button>
      </h3>
  )
};

SidebarHeader.propTypes = {
  filtersView: PropTypes.bool.isRequired,
  handleSidebarViewChange: PropTypes.func.isRequired
};

export default SidebarHeader;