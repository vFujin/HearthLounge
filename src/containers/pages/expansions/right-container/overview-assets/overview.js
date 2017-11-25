import React from 'react';
import PropTypes from 'prop-types';
import ExtensionBlock from "../../../../../components/extension-blocks/extension-block";
import {Art, About, Rewards, Cinematic, Gameboard, NewMechanicsKeywords} from "../../../../../components/extension-blocks/overview-blocks";


const Overview = ({extension, expansionCardbacks}) => {
  const {overview, name} = extension;
  const {cinematic, gameboard, img, about, new_mechanics_keywords} = overview;

  const expansionArt = <Art src={img} name={name} />;
  const expansionAbout= <About about={about} />;
  const expansionRewards = <Rewards extensionCardbacks={expansionCardbacks} />;
  const expansionCinematic = <Cinematic src={cinematic} />;
  const expansionGameboard = <Gameboard src={gameboard} adventureName={name} />;
  const expansionNewMechanicsKeywords = <NewMechanicsKeywords extensionMechanics={new_mechanics_keywords}/>;

  return (
      <ul className="container__blocks">
        <ExtensionBlock page="overview" title="about" element={expansionAbout}/>
        <ExtensionBlock page="overview" blockWidth={2} title="art" element={expansionArt}/>
        <ExtensionBlock page="overview" title="cardbacks" element={expansionRewards} />
        <ExtensionBlock page="overview" title="cinematic" element={expansionCinematic}/>
        <ExtensionBlock page="overview" title="gameboard" element={expansionGameboard}/>
        <ExtensionBlock page="overview" title="new mechanics & keywords" element={expansionNewMechanicsKeywords}/>
      </ul>
  );
};


export default Overview;

Overview.propTypes = {
  extension: PropTypes.object.isRequired,
  expansionCardbacks: PropTypes.array,
};