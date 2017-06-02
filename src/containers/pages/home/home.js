import React from 'react';
import DecksBlock from './decks/decks';
import ArenaPickerBlock from './arena-picker/arena-picker';
import CardsBlock from './cards/cards';
import ExtensionsBlock from './extensions/extensions';
import TournamentsBlock from './tournament/tournaments';
import CreateDeckBlock from './create-deck/create-deck';
import { TwitchBlock } from './twitch/twitch';
import ForumBlock from './forum/forum';
const Home = () => {
  return (
      <div className="container__index home">
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
};

export default Home;