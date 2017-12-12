import React from 'react';
import PropTypes from 'prop-types';
import ExtensionBlock from "../../../../components/extension-blocks/extension-block";
import {
  Art,
  Rewards,
  Cinematic,
  Gameboard,
  Cost,
  About,
  Structure,
  NewMechanicsKeywords
} from "../../../../components/extension-blocks/overview-blocks";

const Overview = ({extension, adventureCardbacks}) => {
  const {overview, name} = extension;
  const {about, cinematic, gameboard, img, cost, structure, new_mechanics_keywords} = overview;

  const adventureAbout = <About about={about}/>;
  const adventureArt = <Art src={img} name={name} />;
  const adventureRewards = <Rewards extensionCardbacks={adventureCardbacks} />;
  const adventureCinematic = <Cinematic src={cinematic} />;
  const adventureGameboard = <Gameboard src={gameboard} adventureName={name} />;
  const adventureCost = <Cost extensionCost={cost}/>;
  const adventureStructure = <Structure extensionStructure={structure}/>;
  const adventureMechanics = <NewMechanicsKeywords extensionMechanics={new_mechanics_keywords} />;

  return (
      <ul className="container__blocks">
        <ExtensionBlock title="about" element={adventureAbout}/>
        <ExtensionBlock title="art" element={adventureArt} blockWidth={2} />
        <ExtensionBlock title="cardbacks" element={adventureRewards} />
        <ExtensionBlock title="cinematic" element={adventureCinematic}/>
        <ExtensionBlock title="gameboard" element={adventureGameboard}/>
        <ExtensionBlock title="cost" element={adventureCost}/>
        <ExtensionBlock title="structure" element={adventureStructure}/>
        <ExtensionBlock title="new mechanics & keywords" element={adventureMechanics}/>
      </ul>
  );
};

export default Overview;

Overview.propTypes = {
  extension: PropTypes.object.isRequired,
  adventureCardbacks: PropTypes.array.isRequired,
};