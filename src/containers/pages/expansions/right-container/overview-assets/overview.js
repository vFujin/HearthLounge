import React from 'react';
import PropTypes from 'prop-types';
import ExtensionBlock from "../../../../../components/extension-blocks/extension-block";
import {Art, About, Rewards, Cinematic, Gameboard, GameChanges} from "../../../../../components/extension-blocks/overview-blocks";


const Overview = ({extension, extensionCardbacks}) => {
  const {overview, name} = extension;
  const {cinematic, gameboard, img, about, game_changes} = overview;

  const expansionArt = <Art src={img} name={name} />;
  const expansionAbout= <About about={about} />;
  const expansionRewards = <Rewards extensionCardbacks={extensionCardbacks} />;
  const expansionCinematic = <Cinematic src={cinematic} />;
  const expansionGameboard = <Gameboard src={gameboard} adventureName={name} />;

  return (
      <ul className="container__blocks">
        <ExtensionBlock page="overview" title="about" element={expansionAbout}/>
        <ExtensionBlock page="overview" blockWidth={2} title="art" element={expansionArt}/>
        <ExtensionBlock page="overview" title="cardbacks" element={expansionRewards} />
        <ExtensionBlock page="overview" title="cinematic" element={expansionCinematic}/>
        <ExtensionBlock page="overview" title="gameboard" element={expansionGameboard}/>
        {
          game_changes &&
          <ExtensionBlock page="overview"
                          title="game changes"
                          element={<GameChanges gameChanges={game_changes}/>}/>
        }
      </ul>
  );
};


export default Overview;

Overview.propTypes = {
  extension: PropTypes.object.isRequired,
  expansionCardbacks: PropTypes.array,
};