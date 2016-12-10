import React, { Component } from 'react';
import { DecksBlock } from './blocks/block_decks';
import { ArenaPickerBlock } from './blocks/block_arena-picker';
import { CardsBlock } from './blocks/block_cards';
import { ExpansionsBlock } from './blocks/block_expansions';
import { TournamentsBlock } from './blocks/block_tournaments';
import { CreateDeckBlock } from './blocks/block_create-deck';
import { StreamersBlock } from './blocks/block_streams';
import { ForumBlock } from './blocks/block_forum';
export class Home extends Component {
  render() {
    return (
        <div className="pageContainer home">
          <ul>
            <DecksBlock />
            <ArenaPickerBlock />
            <TournamentsBlock />
            <ExpansionsBlock />
            <CardsBlock />
            <CreateDeckBlock />
            <StreamersBlock />
            <ForumBlock />
          </ul>
        </div>
    );
  }
}