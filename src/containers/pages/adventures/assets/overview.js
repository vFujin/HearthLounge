import React from 'react';
import PropTypes from 'prop-types';
import Block from "./block";
import Art from "./overview-blocks/art";
import Rewards from "./overview-blocks/rewards";
import Cinematic from "./overview-blocks/cinematic";
import Gameboard from "./overview-blocks/gameboard";

const Overview = ({adventure, adventureCardbacks}) => {
  const {overview, name} = adventure;
  const {cinematic, gameboard, img} = overview;

  const adventureArt = <Art src={img} name={name} />;
  const adventureRewards = <Rewards adventureCardbacks={adventureCardbacks} />;
  const adventureCinematic = <Cinematic src={cinematic} />;
  const adventureGameboard = <Gameboard src={gameboard} adventureName={name} />;

  return (
      <ul className="container__blocks">
        <Block page="overview" title="art" element={adventureArt}/>
        <Block page="overview" title="cardbacks" element={adventureRewards} />
        <Block page="overview" title="cinematic" element={adventureCinematic}/>
        <Block page="overview" title="gameboard" element={adventureGameboard}/>
      </ul>
  );
};

export default Overview;

Overview.propTypes = {
  adventure: PropTypes.string.isRequired,
  adventureCardbacks: PropTypes.array.isRequired,
};