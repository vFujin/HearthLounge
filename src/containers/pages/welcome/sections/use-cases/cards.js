import React from 'react';
import {Link} from "react-router-dom";
import CardInText from "../../../../../components/card/card-in-text";

const ragnaros = <CardInText label="Ragnaros the Firelord" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_298.png" rarity="legendary"/>;
const thrall = <CardInText label="Thrall" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/HERO_02.png" rarity="shaman"/>;
const firelands = <CardInText label="Firelands" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/KAR_076.png" rarity="common"/>;
const adventurer = <CardInText label="one of the adventurers" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_044.png" rarity="mage"/>;
const dustDevil = <CardInText label="Dust Devil" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_243.png" rarity="common"/>;
const neptulon = <CardInText label="Neptulon" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/GVG_042.png" rarity="legendary"/>;

const CaseCards = () => (
    <div>
      <p>After seeing what {ragnaros} has shown {thrall} about his vision of Azeroth and the destruction done to {firelands} with his deck {thrall} has thought: <q>My elementals are so weak...</q>.</p>
      <p>Orc was lost. He didn't know where to start finding new allies.</p>
      <p>Thankfully {adventurer} Shaman met during the exploration shown <Link to="/cards">HearthLounge Cards</Link> page.</p>
      <p><q>That's incredible!</q> - {thrall} shouted after filtering cards by Elemental race.</p>
      <p>Days passed and {thrall} was backed by no one other than {dustDevil} and {neptulon} himself.</p>
    </div>
);

export default CaseCards;
