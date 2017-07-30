import _ from 'lodash';

export const toggleSelectedIcon = (e, selector, updateDeckCreationFilter, prefix) =>{
  let target = e.currentTarget;
  let targetId = target.id;
  let targetClassList = target.classList;
  let hasPrefix = prefix ? `card${_.upperFirst(_.camelCase(selector))}` : _.camelCase(selector);

  if(targetClassList.contains('active')){
    updateDeckCreationFilter({[hasPrefix]:''});
  }
  else{
    updateDeckCreationFilter({[hasPrefix]: targetId});
  }
};