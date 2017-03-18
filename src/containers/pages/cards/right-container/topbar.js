import React from 'react';
import IconFilter from '../../../shared-assets/filters/icon-filter';

const CardsTopbarFilters = props => {
  const {query, handleIconClick} = props;

  return (
      <div className="topbar">
        <IconFilter header={false} filter="cost"        query={query} tooltip={false} wrapper_class="topbar-left"  handleIconClick={handleIconClick}/>
        <IconFilter header={false} filter="playerClass" query={query} tooltip={true} wrapper_class="topbar-right" handleIconClick={handleIconClick}/>
      </div>
  );
};

CardsTopbarFilters.propTypes = {
  handleIconClick: React.PropTypes.func,
  query: React.PropTypes.object
};

export default CardsTopbarFilters;