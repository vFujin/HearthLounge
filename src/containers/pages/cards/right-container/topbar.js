import React from 'react';
import ManaCostFilter from '../../../shared-assets/filters/mana-cost';
import HsClassFilter from  '../../../shared-assets/filters/hs-class';

const CardsTopbarFilters = props => {
  const {children, query} = props;

  return (
      <div className="topbar">
        {children}
        <ManaCostFilter query={query}/>
        <HsClassFilter align="right" page="cards" query={query}/>
      </div>
  );
};

CardsTopbarFilters.propTypes = {
  children : React.PropTypes.element,
  query: React.PropTypes.object
};

export default CardsTopbarFilters;