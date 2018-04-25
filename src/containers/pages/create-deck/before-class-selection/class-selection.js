import React from 'react';
import { connect } from "react-redux";
import ClassSelectionSnippet from '../../../shared-assets/class-selection-wrapper/class-selection-snippet/class-selection-snippet';
import ClassSelectionSnippetMobile from '../../../shared-assets/class-selection-wrapper/class-selection-snippet/mobile/class-selection-snippet-mobile';

const CreateDeckClassSelection = ({windowWidth}) => {
  document.title = "Deck Creation";
  return windowWidth <= 815
    ? <ClassSelectionSnippetMobile/>
    : <ClassSelectionSnippet/>
};

const mapStateToProps = state => {
  const {windowWidth } = state.app.windowSize;
  return { windowWidth };
};

export default connect(mapStateToProps)(CreateDeckClassSelection);
