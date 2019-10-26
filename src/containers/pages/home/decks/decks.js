import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Icon } from 'hearthlounge-design-system';

import ClassSelection from './filters/class-selection';
import ModeSelection from './filters/mode-selection';
import DeckSnippet from '../../../../components/deck-snippet/deck-snippet';
// import SearchDecks from './filters/search-decks';
import Loader from '../../../../components/loaders/diamond/loader';
const DecksBlock = ({
  hotDecks,
  deckFilters,
  handleDeckClick,
  handleFilterClick,
}) => {
  const { playerClass, mode } = deckFilters;
  const listDecks = () => {
    if (hotDecks.all) {
      return hotDecks.all.map((deck, i) => (
        <DeckSnippet key={i} d={deck} handleDeckClick={handleDeckClick} />
      ));
    } else {
      return <p>{hotDecks.error}</p>;
    }
  };

  return (
    <li className={`home__block decks block-width-3`}>
      <div className="home__block--header">
        <Link to="/decks">
          <Icon name="deck" />
          <p>{_.upperCase('decks')}</p>
        </Link>
        <ClassSelection
          activePlayerClassFilter={playerClass || ''}
          handleFilterClick={handleFilterClick}
        />
      </div>
      <div className="home__block--body">
        <div className="left-container">
          <div className="sidebar">
            {/*<SearchDecks/>*/}
            <ModeSelection
              activeModeFilter={mode || ''}
              handleFilterClick={handleFilterClick}
            />
          </div>
        </div>
        <div className="right-container">
          <div className="hot-decks">
            {hotDecks.loading ? <Loader theme="light" /> : listDecks()}
          </div>
        </div>
      </div>
    </li>
  );
};

export default DecksBlock;
