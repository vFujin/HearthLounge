import React, { Component } from 'react';
import { DecksBlock } from './blocks/decks/decks';
import { ArenaPickerBlock } from './blocks/arena-picker/arena-picker';
import { CardsBlock } from './blocks/block_cards';
import { ExpansionsBlock } from './blocks/expansions/expansions';
import { TournamentsBlock } from './blocks/block_tournaments';
import { CreateDeckBlock } from './blocks/block_create-deck';
import { TwitchBlock } from './blocks/twitch/twitch';
import { ForumBlock } from './blocks/forum/forum';
export class Home extends Component {
  render() {
    return (
        <div className="pageContainer home">
          <ul className="home__list">
            <DecksBlock />
            <ArenaPickerBlock />
            <TournamentsBlock />
            <ExpansionsBlock />
            <CardsBlock />
            <CreateDeckBlock />
            <TwitchBlock />
            <ForumBlock />
          </ul>
        </div>
    );
  }
}