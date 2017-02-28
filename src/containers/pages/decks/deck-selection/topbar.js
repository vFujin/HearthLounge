import React, { Component } from 'react';
import {HsClassFilter} from '../../../shared-assets/filters/hs-class';
import CreateDeck from '../right-container/cards-list/create-deck-icon';
export class DeckSelectionTopbar extends Component {
  render() {
    return (
        <div>
          <HsClassFilter align="left" page="decks"/>
          <CreateDeck/>
        </div>
    );
  }
}