import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../../../../components/icon";

const SidebarHeader = ({activeDeck}) =>{
  const {type} = activeDeck;

  return (
      <h3 className="sidebar__header">
        Deck Details
        <Icon name={type} type="mode"/>
      </h3>
  )
};

export default SidebarHeader;

SidebarHeader.propTypes = {
  activeDeck: PropTypes.shape({
    type: PropTypes.string
  }).isRequired
};