import React from 'react';
import PropTypes from 'prop-types';
import ExtensionBlock from "../../../../../../components/extension-blocks/extension-block";
import Art from "../../../../../../components/extension-blocks/overview-blocks/art";
import Rewards from "../../../../../../components/extension-blocks/overview-blocks/rewards";
import Cinematic from "../../../../../../components/extension-blocks/overview-blocks/cinematic";
import Gameboard from "../../../../../../components/extension-blocks/overview-blocks/gameboard";

const Overview = ({extension, expansionCardbacks}) => {
  const {overview, name} = extension;
  const {cinematic, gameboard, img} = overview;

  const expansionArt = <Art src={img} name={name} />;
  const expansionRewards = <Rewards extensionCardbacks={expansionCardbacks} />;
  const expansionCinematic = <Cinematic src={cinematic} />;
  const expansionGameboard = <Gameboard src={gameboard} adventureName={name} />;

  return (
      <ul className="container__blocks">
        <ExtensionBlock page="overview" title="art" element={expansionArt}/>
        <ExtensionBlock page="overview" title="cardbacks" element={expansionRewards} />
        <ExtensionBlock page="overview" title="cinematic" element={expansionCinematic}/>
        <ExtensionBlock page="overview" title="gameboard" element={expansionGameboard}/>
      </ul>
  );
};

export default Overview;

Overview.propTypes = {
  extension: PropTypes.object.isRequired,
  expansionCardbacks: PropTypes.array,
};