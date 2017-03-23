import React from 'react';
import IconFilter from '../../../shared-assets/filters/icon-filter';

const CardsTopbarFilters = props => {
  const {data, query} = props;

  return (
      <div className="topbar">
        <IconFilter header={false} filter="cost"        query={query} tooltip={false} data={data} wrapper_class="topbar-left" />
        <IconFilter header={false} filter="playerClass" query={query} tooltip={true}  data={data} wrapper_class="topbar-right" />
      </div>
  );
};

CardsTopbarFilters.propTypes = {
  query: React.PropTypes.object
};

export default CardsTopbarFilters;