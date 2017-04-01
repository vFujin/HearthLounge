import React from 'react';
import {IconFilter} from '../../../../shared-assets/filters/icon-filter';
const Topbar = ({filtersView, query}) => {
    let filtersViewActive = filtersView === true ? 'topbar__deckDetails' : 'display-none';
    let filtersViewNotActive = filtersView === false ? 'display-none' : 'topbar__filters';
    return (
        <div className="topbar">
          <div className={filtersViewNotActive}>
            <IconFilter header={false} filter="cost" query={query} tooltip={false} wrapper_class="topbar-left" />
          </div>
          <div className={filtersViewActive}>

          </div>
        </div>
    );
};

export default Topbar;