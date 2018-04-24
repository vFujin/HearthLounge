import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import _ from 'lodash';

const CreateDeckTopbarTabMobile = ({name, handleTabClick, activeCreateDeckMobileTab}) => {
  return (
    <div id={name}
         className={`topbarMobile__${name} ${name === activeCreateDeckMobileTab ? "active" : undefined}`}
         onClick={handleTabClick}>
      {_.startCase(name)}
    </div>
  )
};

CreateDeckTopbarTabMobile.propTypes = {
  name: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const {activeCreateDeckMobileTab} = state.deckCreation;
  return {activeCreateDeckMobileTab};
};


export default connect(mapStateToProps)(CreateDeckTopbarTabMobile);