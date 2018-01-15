import React from 'react';
import {connect} from 'react-redux';
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
  GameChanges
} from "../../../../components/extension-blocks/overview-blocks";
import {blockSize} from "../../../../utils/block-size";

const Overview = ({extension, gameCardbacks, windowWidth}) => {
  const {overview, name} = extension;
  const {about, cinematic, gameboard, img, cost, structure, game_changes, cardbacks} = overview;

  const adventureAbout = <About about={about}/>;
  const adventureArt = <Art src={img} name={name} />;
  const adventureRewards = <Rewards gameCardbacks={gameCardbacks} cardbacks={cardbacks} />;
  const adventureCinematic = <Cinematic src={cinematic} />;
  const adventureGameboard = <Gameboard src={gameboard} adventureName={name} />;
  const adventureCost = <Cost extensionCost={cost}/>;
  const adventureStructure = <Structure extensionStructure={structure}/>;

  return (
      <ul className="container__blocks">
        <ExtensionBlock title="about" blockWidth={blockSize(1, windowWidth)} element={adventureAbout}/>
        <ExtensionBlock title="art" blockWidth={blockSize(2, windowWidth)} element={adventureArt} />
        <ExtensionBlock title="cardbacks" blockWidth={blockSize(1, windowWidth)} element={adventureRewards} />
        <ExtensionBlock title="cinematic" blockWidth={blockSize(1, windowWidth)} element={adventureCinematic}/>
        <ExtensionBlock title="gameboard" blockWidth={blockSize(1, windowWidth)} element={adventureGameboard}/>
        <ExtensionBlock title="cost" blockWidth={blockSize(1, windowWidth)} element={adventureCost}/>
        <ExtensionBlock title="structure" blockWidth={blockSize(1, windowWidth)} element={adventureStructure}/>
        {
          game_changes &&
          <ExtensionBlock page="overview"
                          title="game changes"
                          blockWidth={blockSize(1, windowWidth)}
                          element={<GameChanges gameChanges={game_changes}/>}/>
        }
      </ul>
  );
};

const mapStateToProps = state =>{
  const {windowWidth} = state.app.windowSize;
  return {windowWidth};
};

export default connect(mapStateToProps)(Overview);

Overview.propTypes = {
  extension: PropTypes.object.isRequired,
  gameCardbacks: PropTypes.object,
};