import _ from 'lodash';

export const updateFilters = (action, filters, filter, value) =>{
  const msog = "Mean Streets Of Gadgetzan";
  const multiClassGroup = 'multiClassGroup';

  if(filter === "cardSet" && value !== msog && filters.multiClassGroup){
    return action({
      filters: {
        ..._.omit(filters, multiClassGroup),
        [filter]: value
      }
    })
  }

  if(filters[filter] && filters[filter] === value) {
    if(filter === "cardSet" && value === msog){
      return action({filters: _.omit(filters, [filter, multiClassGroup])})
    }
    return action({filters: _.omit(filters, filter)});
  }

  return action({
    filters: {
      ...filters,
      [filter]: value
    },
    loadedCards: 40
  });
};