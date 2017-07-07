import React from 'react';
import PropTypes from 'prop-types';
import Topbar from './topbar';
import Content from './content';

const Expansion = ({cards, details, expansion}) => {
  return (
      <div className="container__page--inner container__page--right">
        <Topbar expansion={expansion} details={details}/>
        <Content cards={cards} details={details} expansion={expansion}/>
      </div>
  )
};

export default Expansion;

Expansion.propTypes = {
  cards: PropTypes.array.isRequired,
  details: PropTypes.string,
  expansion: PropTypes.string
};