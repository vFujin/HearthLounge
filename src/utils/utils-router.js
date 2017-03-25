import { browserHistory } from 'react-router';

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
  console.log(queryNames);
  const location = Object.assign({}, browserHistory.getCurrentLocation());
  queryNames.forEach(q => location.query[q] === false);
  browserHistory.push(location);
};