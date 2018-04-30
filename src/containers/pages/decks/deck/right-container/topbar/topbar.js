import React from 'react';
import { connect } from "react-redux";
import CreatedDetails from './created-details/created-details';
import DeckDetails from "./deck-details/deck-details";
import DeckAuthorDetails from "./deck-author-details/deck-author-details";

const Topbar = ({windowWidth}) => (
  <div className="topbar">
    <div className="topbar__container topbar__grid topbar__grid--3-4-1">
      <DeckDetails />
      {windowWidth > 1365 && <DeckAuthorDetails />}
      <CreatedDetails />
    </div>
  </div>
);

const mapStateToProps = state => {
  const { windowWidth } = state.app.windowSize;
  return { windowWidth };
};

export default connect(mapStateToProps)(Topbar);
