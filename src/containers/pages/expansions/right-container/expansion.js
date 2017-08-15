import React from 'react';
import PropTypes from 'prop-types';
import Topbar from './topbar';
import Content from './content';
import {expansion_details} from "../../../../data/expansion-details";

const Expansion = ({cards, details, expansion}) => {
  let activeExpansion = expansion_details.filter(e => e.url === expansion)[0];

  return (
      <div className="container__page--inner container__page--right">
        <Topbar expansion={activeExpansion} details={details}/>
        <Content cards={cards}
                 details={details}
                 activeExpansion={activeExpansion}
                 expansion={expansion}/>
      </div>
  )
};

export default Expansion;

Expansion.propTypes = {
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }),
  details: PropTypes.string,
  expansion: PropTypes.string
};