import { browserHistory } from 'react-router';
import _ from 'lodash';
/**
 * @param {Object} query
 */
export const addQuery = (query) => {
  const location = Object.assign({}, browserHistory.getCurrentLocation());
  Object.assign(location.query, query);
  browserHistory.push(location);
};

/**
 * @param {...String} queryNames
 */
export const removeQuery = (...queryNames) => {

  let location = Object.assign({}, browserHistory.getCurrentLocation());
  // let foo = _.without(location.query, queryNames);
  // console.log(queryNames);
  // let foo = queryNames.filter(q => _.keys(location.query) !== q );
  // console.log(location.query);
  // location.query = _.filter(location.query, (v, k) => queryNames.indexOf(k) === -1);
  // location.query(q => {
  //   if(q === queryNames[0]){
  //     delete q;
  //   }
  // });
  // _.reduce(location.query, (acc, v, k) => {
  //   console.log(location.query, acc, k, v);
  //   if(queryNames.indexOf(k) > -1){
  //     acc[v] = v;
  //   }
  //   return acc;
  //
  // });
  // console.log(location.query);
  browserHistory.push(location);
};