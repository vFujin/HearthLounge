import React from 'react';

const SidebarHeader = ({ifDeck, ifFilter, handleSidebarViewChange}) =>{
  return (
      <h3 className="sidebar__header">
        <span>{ifDeck}</span>
        <button className="btn-pearl" onClick={handleSidebarViewChange}>Show {ifFilter}</button>
      </h3>
  )
};

SidebarHeader.propTypes = {
  ifDeck: React.PropTypes.bool.isRequired,
  ifFilter: React.PropTypes.bool.isRequired,
  handleSidebarViewChange: React.PropTypes.func.isRequired
};


export default SidebarHeader;