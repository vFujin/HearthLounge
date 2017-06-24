import React from 'react';
import DecksBlock from './decks/decks';
import ArenaPickerBlock from './arena-picker/arena-picker';
import CardsBlock from './cards/cards';
import ExtensionsBlock from './extensions/extensions';
import TournamentsBlock from './tournament/tournaments';
import CreateDeckBlock from './create-deck/create-deck';
import HomeBlock from './block';
import { TwitchBlock } from './twitch/twitch';
import ForumBlock from './forum/forum';
const Home = () => {
  return (
      <div className="container__index home">
        <ul className="home__list">
            <DecksBlock />
          <HomeBlock icon="arena-picker">
            <ArenaPickerBlock/>
          </HomeBlock>
          <HomeBlock icon="tournament" blockTitle="tournaments">
            <TournamentsBlock/>
          </HomeBlock>
          <HomeBlock icon="expansions" blockWidth={2}>
            <ExtensionsBlock />
          </HomeBlock>

          <HomeBlock icon="card" title="cards">
           <CardsBlock />
          </HomeBlock>
          <HomeBlock icon="create-deck">
            <CreateDeckBlock />
          </HomeBlock>
          <HomeBlock icon="twitch" blockWidth={2} title="top HS broadcasters" >
            <TwitchBlock />
          </HomeBlock>
          {/*<HomeBlock icon="bubbles2" title="forum" >*/}
            {/*<ForumBlock />*/}
          {/*</HomeBlock>*/}
          <HomeBlock icon="reddit">
            <ForumBlock />
          </HomeBlock>
        </ul>
      </div>
  );
};

export default Home;