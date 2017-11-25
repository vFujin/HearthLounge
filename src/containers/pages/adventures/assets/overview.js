import React from 'react';
import PropTypes from 'prop-types';
import ExtensionBlock from "../../../../components/extension-blocks/extension-block";
import Art from "../../../../components/extension-blocks/overview-blocks/art";
import Rewards from "../../../../components/extension-blocks/overview-blocks/rewards";
import Cinematic from "../../../../components/extension-blocks/overview-blocks/cinematic";
import Gameboard from "../../../../components/extension-blocks/overview-blocks/gameboard";
import Cost from "../../../../components/extension-blocks/overview-blocks/cost";
import About from "../../../../components/extension-blocks/overview-blocks/about";
import Structure from "../../../../components/extension-blocks/overview-blocks/structure";
import NewMechanicsKeywords from "../../../../components/extension-blocks/overview-blocks/mechanics";

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