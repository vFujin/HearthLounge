import React from 'react';
import MapFunctionlessIcons from './map-functionless-icons';
import IconFilter from '../../../../../shared-assets/filters/redux-icon-filter';
import {connect} from 'react-redux';
import {toggleSelectedIcon} from "../../../../../../utils/filter/toggle-selected-icon";
import {updateDeckCreationFilters} from "../../../../../../redux/actions/create-deck/create-deck";

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
  const {cardTopbarSet, cardCost} = state.deckCreation;
  return {
    cardTopbarSet,
    cardCost
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckCreationFilter: (deckCreationFilters) => dispatch(updateDeckCreationFilters(deckCreationFilters)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);





