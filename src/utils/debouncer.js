import _ from 'lodash';
export function debounceEventHandler(...args){
  const debounced = _.debounce(...args);
  return (e)=>{
    e.persist();
    return debounced(e);
  }
}
