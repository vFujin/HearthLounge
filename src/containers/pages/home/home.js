import React, { Component } from 'react';
import { DecksBlock } from './decks/decks';
import { ArenaPickerBlock } from './arena-picker/arena-picker';
import { CardsBlock } from './cards/cards';
import { ExpansionsBlock } from './expansions/expansions';
import { TournamentsBlock } from './tournament/tournaments';
import { CreateDeckBlock } from './create-deck/create-deck';
import { TwitchBlock } from './twitch/twitch';
import { ForumBlock } from './forum/forum';
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