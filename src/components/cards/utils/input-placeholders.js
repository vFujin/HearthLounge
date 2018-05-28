import React from 'react';
import _ from 'lodash';
import Loader from "../../loaders/diamond/loader";

export const cardsPlaceholder = (data, dataArrayIsArray) =>{
  if (data.length === 0) {
    return <Loader theme="light" sideLength={10}/>;
  }

  if (!dataArrayIsArray) {
    return data.error;
  }

  if (dataArrayIsArray) {
    const length = 3;
    const placeholder = data.slice(0, length).map(card => _.startCase(card.name)).join(", ");
    if (data.length <= length) {
      return placeholder;
    }
    return `${placeholder}...`;
  }
};

export const gameInfoPlaceholder = (data, filter) =>{
  if (data.loading) {
    return <Loader theme="light" sideLength={10}/>;
  }

  if (data.error) {
    return data.error;
  }

  if (data[filter]) {
    const length = 3;
    const placeholder = data[filter].slice(0, length).map(gameInfo => _.startCase(gameInfo)).join(", ");
    if (data[filter].length <= length) {
      return placeholder;
    }
    return `${placeholder}...`;
  }
};