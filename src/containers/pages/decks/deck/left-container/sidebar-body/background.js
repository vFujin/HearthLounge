import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../../../../components/icon";

const Background = ({playerClass}) =>{
  return (
      <div className="background">
        <Icon name={playerClass} tooltip={false}/>
      </div>
  )
};

export default Background;

Background.propTypes = {
  playerClass: PropTypes.string.isRequired
};
