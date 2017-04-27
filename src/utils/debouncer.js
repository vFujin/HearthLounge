import _ from 'lodash';
export function debounceEventHandler(...args){
  const debounced = _.debounce(...args);
  return (e)=>{
    e.persist();
    console.log(e);
    return debounced(e);
  }
}
