import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const Archetype = ({activeDeck}) =>{
  const {loading, playerClass, archetype} = activeDeck;

  return (
      <div className="deck-details-wrapper archetype">
        <p className={`${playerClass} active ${loading ? "loading" : undefined}`}>
          {archetype} {playerClass}
        </p>
      </div>
  )
};

const mapStateToProps = state => {
  const { activeDeck } = state.deckView;
  return { activeDeck };
};

export default connect(mapStateToProps)(Archetype);

Archetype.propTypes = {
  activeDeck: PropTypes.shape({
    playerClass: PropTypes.string,
    archetype: PropTypes.string
  })
};