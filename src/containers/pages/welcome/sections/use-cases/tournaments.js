import React from 'react';
import CardInText from "../../../../../components/card/card-in-text";
import {Link} from "react-router-dom";

const guldan = <CardInText label="Gul'Dan" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/HERO_07.png" rarity="warlock"/>;

const CaseTournaments = () => (
  <div>
    <p>Abandoning the ways of shamanism and betraying both his people and his mentor, Ner'Zhul, to the demon-lord Kil'jaeden for personal gain and power {guldan} founded The Shadow Council.</p>
    <p>Warlock didn't know how to choose the best orcs that would be THE elite. Since Kil'Jaeden was his new mentor, the demon-lord
      suggested {guldan} <Link to="/tournaments">HearthLounge's tournaments page</Link>. Here {guldan} could find THE BEST recruiters by both, organizing and participating in tournaments.</p>
    <p>Couple months passed and {guldan} became the most powerful mortal Warlock known to Azeroth.</p>
  </div>
);

export default CaseTournaments;
