import React, { Component } from 'react';
import { DecksBlock } from './blocks/home.block_decks';
import { ArenaPickerBlock } from './blocks/home.block_arena-picker';
import { CardsBlock } from './blocks/home.block_cards';
import { ExpansionsBlock } from './blocks/home.block_expansions';
import { TournamentsBlock } from './blocks/home.block_tournaments';
import { CreateDeckBlock } from './blocks/home.block_create-deck';
import { StreamersBlock } from './blocks/home.block_streams';
import { ForumBlock } from './blocks/home.block_forum';
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