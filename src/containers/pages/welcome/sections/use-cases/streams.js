import React from 'react';
import CardInText from "../../../../../components/card/card-in-text";
import {Link} from "react-router-dom";

const uther = <CardInText label="Uther the Lightbringer" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/HERO_04.png" rarity="paladin"/>;
const murlocs = <CardInText label="murlocs" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/LOEA10_3.png" rarity="common"/>;
const maexxna = <CardInText label="poisonous enemies" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/FP1_010.png" rarity="legendary"/>;
const knights = <CardInText label="Silver Hand knights" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_008.png" rarity="paladin"/>;

const CaseStreams = () => (
  <div>
    <p>Lord {uther} can't deal with newly recruited {knights}. They are incompetent.</p>
    <p>Amateur paladins kept wasting their divine shields on {murlocs} instead of {maexxna}</p>
    <p>Thankfully, Lightbringer remembered about one site he mentioned in his book, The Light and How to Swing it. It was <Link to="/streamers">HearthLounge's streamers page</Link>.</p>
    <p>Showing this (sc)AMAZING source of knowledge which is the live broadcast of given deck, {uther} didn't have to mentor his recruits ever since.</p>
  </div>
);

export default CaseStreams;
