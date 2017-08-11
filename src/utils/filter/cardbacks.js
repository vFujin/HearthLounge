import _ from 'lodash';
export function filterCardbacks(activeExtension, cardbacks, callback){
  const {overview} = activeExtension;

  let filteredCardbacks = _.filter(cardbacks, cardback => {
    const {cardBackId} = cardback;
    let matchesHeroic = cardBackId === overview.cardback_heroic;
    let matchesEvent = cardBackId === overview.cardback_event;

    return matchesHeroic || matchesEvent;
  });

  callback(filteredCardbacks);
}