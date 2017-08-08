import React from 'react';
import _ from 'lodash';
import {adventure_details, adventure_detail_tabs} from '../../../../../data/adventure-details';
import {adventureWingExists, adventureBossExists} from '../../../../../utils/checkIfPathExist';
import {
  Overview,
  Bosses,
  Cards,
  ClassChallenges,
  Cost,
  Structure,
  Boss
} from '../../assets';

const components = {
  Overview,
  Bosses,
  Cards,
  ClassChallenges,
  Cost,
  Structure,
  Boss,
};

const AdventureDetails = ({cards, adventure, details, boss}) =>{
  const currentView = () =>{
    return adventure_detail_tabs.filter(adventure => adventure.url === details).map(page=> {
      let componentName = _.upperFirst(_.camelCase(page.name));
      let Page = components[componentName];

      return <Page key={page.url} adventure={adventure} cards={cards}/>
    })
  };

  const bossDetails = () => {
    let activeAdventure = adventure_details.filter(a=> a.url === adventure);
    let wing = activeAdventure[0].wings.details.find(wing => wing.url === details);
    let activeBoss = wing.bosses.find(b => b.url === boss);

    return activeAdventure.map(adventure=>
        <Boss key={adventure.url} adventure={adventure} wing={wing} boss={activeBoss} />
    )
  };
  return <div className="content">
    {(adventureWingExists(adventure, details) && adventureBossExists(adventure, details, boss))
        ? bossDetails()
        : currentView()
    }
    </div>;
};

export default AdventureDetails;

AdventureDetails.propTypes = {

};
