import React from 'react';
import _ from 'lodash';
import {adventure_detail_tabs} from '../../../../data/adventure-details';
import {wingExists, bossExists} from '../../../../utils/adventures/paths';
import {
  Overview,
  Bosses,
  Cards,
  ClassChallenges,
  Cost,
  Structure,
  Boss
} from '../assets';

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

  return <div className="content">
    {(wingExists(adventure, details) && bossExists(adventure, details, boss))
        ? <Boss adventure={adventure} boss={boss} details={details}/>
        : currentView()}
    </div>;
};

export default AdventureDetails;

AdventureDetails.propTypes = {

};
