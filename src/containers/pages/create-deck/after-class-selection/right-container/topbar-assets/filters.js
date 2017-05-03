import React from 'react';
import _ from 'lodash';
import MapFunctionlessIcons from './map-functionless-icons';
import IconFilter from '../../../../../shared-assets/filters/redux-icon-filter';
import {connect} from 'react-redux';

const Filters = ({deck, activeClass, filtersActive, updateFilter, cardTopbarSet, cardCost}) => {

  const handleIconClick = (e, selector) =>{
    let target = e.currentTarget;
    let targetId = target.id;
    let targetClassList = target.classList;

    if(targetClassList.contains('active')){
      updateFilter({[`card${_.upperFirst(_.camelCase(selector))}`]:''});
    }
    else{
      updateFilter({[`card${_.upperFirst(_.camelCase(selector))}`]:targetId});
    }
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
    updateFilter: (filters) => dispatch({
      type: 'UPDATE_FILTER', filters
    }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);





