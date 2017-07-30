import React from 'react';
import _ from 'lodash';
import MapFunctionlessIcons from './map-functionless-icons';
import IconFilter from '../../../../../shared-assets/filters/redux-icon-filter';
import {connect} from 'react-redux';
import {toggleSelectedIcon} from "../../../../../../utils/filter/toggle-selected-icon";

const Filters = ({deck, activeClass, filtersActive, updateDeckCreationFilter, cardTopbarSet, cardCost}) => {

  const handleIconClick = (e, selector) =>{
    toggleSelectedIcon(e, selector, updateDeckCreationFilter, true);
  };

  return (
      <div className={`topbar__container`}>
        <IconFilter header={false} headerLabel="cost" filter="cost"  value={cardCost} wrapperClass="topbar-left"  handleIconClick={handleIconClick}/>
        <div className="topbar-right">
          <MapFunctionlessIcons deck={deck} activeClass={activeClass} filtersActive={filtersActive} set="cards" />
        </div>
      </div>
  )
};

const mapStateToProps = (state) => {
  const {cardTopbarSet, cardCost} = state.deckCreationFilters;
  return {
    cardTopbarSet,
    cardCost
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckCreationFilter: (filters) => dispatch({
      type: 'UPDATE_DECK_CREATION_FILTER', filters
    }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);





