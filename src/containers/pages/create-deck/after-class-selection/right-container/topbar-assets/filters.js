import React from 'react';
import MapFunctionlessIcons from './map-functionless-icons';
import IconFilter from '../../../../../shared-assets/filters/icon-filter';

const Filters = ({deck, activeClass, query, filtersActive}) => {

  return (
      <div className={`topbar__container`}>
        <IconFilter header={false} filter="cost" query={query} tooltip={false} wrapper_class="topbar-left" />
        <div className="topbar-right">
          <MapFunctionlessIcons deck={deck} activeClass={activeClass} filtersActive={filtersActive} set="cards" />
        </div>
      </div>
  )
};

export default Filters;






