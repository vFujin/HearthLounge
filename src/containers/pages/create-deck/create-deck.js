import React, { Component } from 'react';
import {connect} from 'react-redux';

export const CreateDeck = (props) => {

    return (
        <div className="pageContainer"></div>
    );

};

const mapStateToProps = (state) => {
  return {
    currentTime: state.currentTime
  }
};

export default connect(mapStateToProps)(CreateDeck)