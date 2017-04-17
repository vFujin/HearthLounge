import React from 'react';
import MapFunctionlessIcons from './map-functionless-icons';
import IconFilter from '../../../../../shared-assets/filters/icon-filter';

const Filters = ({deck, filtersNotActive, params, query}) => {

  return (
      <div className={`topbar__container ${filtersNotActive}`}>
        <IconFilter header={false} filter="cost" query={query} tooltip={false} wrapper_class="topbar-left" />
        <div className="topbar-right">
          <MapFunctionlessIcons deck={deck} params={params} set="cards" filtersActive={filtersNotActive}/>
        </div>
      </div>
  )
};

export default Filters;






