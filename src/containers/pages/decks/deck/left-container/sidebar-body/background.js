import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../../../../components/icons/icon";

const Background = ({hsClass}) =>{
  return (
      <div className="background">
        <Icon name={hsClass} tooltip={false}/>
      </div>
  )
};

export default Background;

Background.propTypes = {
  hsClass: PropTypes.string.isRequired
};
