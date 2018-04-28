import React from 'react';
import DeckVotes from "./votes";
import DeckStats from "./stats";
import Archetype from "./archetype";
import './styles.css';

const DeckDetails = () =>(
  <div className="deck-details">
    <DeckVotes />
    <DeckStats />
    <Archetype />
  </div>
);

export default DeckDetails;