import React from 'react';
import CardInText from "../../../../../components/card/card-in-text";
import {Link} from "react-router-dom";
import Icon from "../../../../../components/icon";

const theramore = <CardInText label="Theramore" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/GVG_015.png" rarity="mage"/>;
const jaina = <CardInText label="Jaina Proudmoore" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/HERO_08.png" rarity="mage"/>;
const dreadlords = <CardInText label="Dreadlords" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/HERO_08.png" rarity="warlock"/>;
const garrosh = <CardInText label="Garrosh Hellscream" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/HERO_01.png" rarity="warrior"/>;
const pirate = <CardInText label="Pirate" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/CFM_325.png" rarity="common"/>;
const iceblock = <CardInText label="Ice Block" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_295.png" rarity="karazhan"/>;
const waterElemental = <CardInText label="water elementals" imgSrc="http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_033.png" rarity="common"/>;

const CaseCreateDeck = () => (
  <div>
    <span className="hero mage in-text">Jaina Proudmoore</span>
    <p>Azeroth went silent. After sudden disappearance of {theramore} from the planet {jaina} went into full mad-mode. Even {dreadlords} weren't THAT angry at their madness peak.</p>
    <p>The amount of hate Mage had towards {garrosh} was inconceivable. The {pirate} Deck was so devastating
      every time she tried to face it with her Fatigue deck. {iceblock} was always late to the party.</p>
    <p>To the rescue came one of {jaina}'s {waterElemental} suggesting <Link to="/create-deck">HearthLounge's tool - the ultimate Deck Creation</Link>.</p>
    <p>With <Link to="/create-deck">HearthLounge's Deck Creation tool</Link> {jaina} discovered new possibilities and finally managed to defeat the big bully Warrior.</p>
    <p>Some say {garrosh} did nothing wrong to this day.</p>
    <Icon name="create-deck"/>
  </div>
);

export default CaseCreateDeck;
