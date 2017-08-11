import React from 'react';
import PropTypes from 'prop-types';
import Overview from "../../assets/boss-details/overview";
import Strategy from "../../assets/boss-details/strategy";
import Rewards from "../../assets/boss-details/rewards";
import Decklist from "../../assets/boss-details/decklist";
import WingBosses from "../../assets/boss-details/wing-bosses";

const BossBlock = ({allCards, blockName, adventure, wing, boss, decks}) =>{
  const blockElement = (blockName) =>{
    switch(blockName){
      case 'overview': return <Overview adventure={adventure.url}
                                        wing={wing}
                                        boss={boss}/>;

      case 'strategy': return <Strategy />;
      case 'rewards': return <Rewards allCards={allCards} bossReward={boss.reward}/>;
      case 'wing bosses': return <WingBosses adventure={adventure.url}
                                             wing={wing.url}
                                             activeBoss={boss.url}
                                             wingBosses={wing.bosses}/>;
      case 'decks': return <Decklist adventure={adventure.adventure} decks={decks}/>;

      default: return null;
    }
  };

  return (
      <li className="container__blocks--block boss">
        <h4 className="container__blocks--block-header">{blockName === "wing bosses" ? `${wing.wing_title}` : blockName}</h4>
        {blockElement(blockName)}
      </li>
  )
};

BossBlock.propTypes = {
  blockName: PropTypes.string.isRequired,
  adventure: PropTypes.object.isRequired,
  wing: PropTypes.shape({
    wing_title: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  boss: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  allCards: PropTypes.array,
  decks: PropTypes.array
};

export default BossBlock;