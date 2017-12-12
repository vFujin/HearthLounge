export const isFilterActive = (filter, targetId, isActive, updateFilters) =>{
  if(isActive) return updateFilters({[filter]: false});
  else return updateFilters({[filter]: targetId});
};