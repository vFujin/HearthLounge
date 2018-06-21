import React from 'react';
import CardInText from "../../../../../components/card/card-in-text";
import {Link} from "react-router-dom";


const valeera = <CardInText label="Valeera Sanguinar" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/HERO_03.png" rarity="rogue"/>;
const jade = <CardInText label="Jade Druid" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/CFM_602.png" rarity="druid"/>;
const malfurion = <CardInText label="Malfurion Stormrage" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/HERO_06.png" rarity="druid"/>;

const CaseDecks = () => (
  <div className="useCase useCase__decks">
    <p>{valeera} kept loosing with her own decks against {jade}. No matter how hard {valeera} tried to construct new deck, she still couldn't win.</p>
    <p><q>{malfurion} is so strong...</q> - {valeera} thought.</p>
    <p><q>Wait a minute, I'm a Rogue! I can steal someones deck and no one will notice!</q> - not a minute passed and Sanguinar copied <Link to="/decks">deck shared by one of HearthLounge's users</Link>.</p>
    <p>Ever since then our Rogue did the math and has exactly 4986% win ratio. 4985% is inadequate. 4987% of course is an absurd.</p>
  </div>
);

export default CaseDecks;
