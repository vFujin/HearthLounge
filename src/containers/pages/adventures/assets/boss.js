import React from 'react';
import PropTypes from 'prop-types';

import BossBlock from "../right-container/content/boss-block";

const Boss = ({adventure, wing, boss}) => {

  return (
      <ul className="container__boss">
        <BossBlock blockName="overview" adventure={adventure} wing={wing} boss={boss}/>
        <BossBlock blockName="strategy" adventure={adventure} wing={wing} boss={boss}/>
        <BossBlock blockName="rewards" adventure={adventure} wing={wing} boss={boss}/>
        <BossBlock blockName="wing bosses" adventure={adventure} wing={wing} boss={boss}/>
        <BossBlock blockName="decks" adventure={adventure} wing={wing} boss={boss}/>
      </ul>
  )
};

Boss.propTypes = {
  adventure: PropTypes.object.isRequired,
  wing: PropTypes.object.isRequired,
  boss: PropTypes.object.isRequired
};

export default Boss;