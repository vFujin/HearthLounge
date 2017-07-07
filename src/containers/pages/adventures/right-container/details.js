import React from 'react';
import _ from 'lodash';
import {adventure_detail_tabs, adventure_details} from '../../../../data/adventure-details';
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
  // Boss,
};

const AdventureDetails = ({cards, adventure, details}) =>{
  const currentView = () =>{
    return adventure_detail_tabs.filter(adventure => adventure.url === details).map(page=> {
      let componentName = _.upperFirst(_.camelCase(page.name));
      let Page = components[componentName];

      return <Page key={page.url} adventure={adventure} cards={cards}/>
    })
  };

  return <div>{currentView()}</div>;
};

export default AdventureDetails;

AdventureDetails.propTypes = {

};
