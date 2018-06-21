import React from 'react';
import CardInText from "../../../../../components/card/card-in-text";
import {Link} from "react-router-dom";

const anduin = <CardInText label="Andruin Wrynn" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/HERO_09.png" rarity="priest"/>;
const mindgames = <CardInText label="mindgames" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_345.png" rarity="karazhan"/>;

const CaseReddit = () => (
  <div>
    <p>Beeing a king is not easy. You need to be up to date with every surrounding around you.</p>
    <p>{anduin} is one of the kings. <Link to="/reddit">HearthLounge's page dedicated to Hearthstone subreddit</Link> allows Priest to play next-level {mindgames} with his opponets.</p>
  </div>
);

export default CaseReddit;
