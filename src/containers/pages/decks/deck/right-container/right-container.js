import React from 'react';
import PropTypes from 'prop-types';
import Topbar from './topbar';
import Content from './content';

const RightContainer = ({activeDeck, activeDeckCopy, patch, deckEditView, descriptionsNotEqual, decksNotEqual, params}) =>{
  return (
      <div className="container__page--inner container__page--right">
        <Topbar />
        <Content activeDeck={activeDeck}
                 patch={patch}
                 deckEditView={deckEditView}
                 decksNotEqual={decksNotEqual}
                 descriptionsNotEqual={descriptionsNotEqual}
                 params={params}/>
      </div>
  )
};

export default RightContainer;

RightContainer.propTypes = {
  activeDeck: PropTypes.object
};