import React, { Component } from 'react';
import DecksBlock from './decks/decks';
import ArenaPickerBlock from './arena-picker/arena-picker';
import CardsBlock from './cards/cards';
import ExtensionsBlock from './extensions/extensions';
import TournamentsBlock from './tournament/tournaments';
import CreateDeckBlock from './create-deck/create-deck';
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
            <ExtensionsBlock />
            <CardsBlock />
            <CreateDeckBlock />
            <TwitchBlock />
            <ForumBlock />
          </ul>
        </div>
    );
  }
}