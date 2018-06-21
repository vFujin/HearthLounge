import React from 'react';
import {Link} from "react-router-dom";
import CardInText from "../../../../../components/card/card-in-text";
import Icon from "../../../../../components/icon";

const rexxar = <CardInText label="Rexxar" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/HERO_05.png" rarity="hunter"/>;
const darkness = <CardInText label="The Darkness" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/LOOT_526.png" rarity="legendary"/>;
const cotw = <CardInText label="Call of the Wild" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/OG_211.png" rarity="karazhan"/>;
const togwaggle = <CardInText label="King Togwaggle" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/LOOT_541.png" rarity="legendary"/>;

const CaseExtensions = () => (
  <div>
    <span className="hero hunter in-text">Rexxar</span>
    <p>Candles arised. Horde leaders assigned {rexxar} to deal with growing <Link to="/extensions/kobolds-catacombs">Kobolds and their Catacombs</Link> pressure in north Durotar.</p>
    <p>As Hunter defeated {darkness} pretty easily with {cotw}, he couldn't defeat {togwaggle}.</p>
    <p>One of {rexxar}'s companions suggested to visit <Link to="/extensions/kobolds-catacombs">HearthLounge's Kobolds & Catacombs overview</Link>.</p>
    <p>After looking up on what {togwaggle} is up to with his deck it was pretty clear who will win the next fight. The light of the candles died.</p>
    <Icon name="expansions"/>
  </div>
);

export default CaseExtensions;
