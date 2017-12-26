import React from 'react';
import PropTypes from 'prop-types';
import {IsGoldenFilter} from '../../../containers/shared-assets/filters/is-golden';
import IconFilter from '../../../containers/shared-assets/filters/icon-filter';
import InputFilter from '../../../containers/shared-assets/filters/input-filter';
import SliderFilter from '../../../containers/shared-assets/filters/slider-filter';

const Sidebar = ({cards, filters, handleFilterClick}) => {

  return (
    <div className="sidebar__body">
      {/*<InputFilter data={cards.allCards} dataLoading={cards.loading} filter="name"      query={query} multiple={false}/>*/}
      {/*<InputFilter data={cards.allCards} dataLoading={cards.loading} filter="race"      query={query} multiple={true}/>*/}
      {/*<InputFilter data={cards.allCards} dataLoading={cards.loading} filter="mechanics" query={query} multiple={true}/>*/}
      {/*<InputFilter data={cards.allCards} dataLoading={cards.loading} filter="faction"   query={query} multiple={true}/>*/}
      {/*<InputFilter data={cards.allCards} dataLoading={cards.loading} filter="type"      query={query} multiple={true}/>*/}

      {/*<SliderFilter filter="health"     query={query} defaultValue={[0, 30]} max={50} marks={{0:0, 30:30, 50:50}}/>*/}
      {/*<SliderFilter filter="attack"     query={query} defaultValue={[0, 5]}  max={30} marks={{0:0, 5:5, 30:30}}/>*/}
      {/*<SliderFilter filter="durability" query={query} defaultValue={[0, 7]}  max={10} marks={{0:0, 7:7, 10:10}}/>*/}

      <IconFilter header={true} header_label="standard sets" filter="cardSet"         filters={filters} wrapper_class="sidebar-icons" isStandard={true} handleClick={handleFilterClick}/>
      {
        filters.cardSet === "mean-streets-of-gadgetzan"
          ? <IconFilter header={true} header_label="Family"        filter="multiClassGroup" filters={filters} wrapper_class="sidebar-icons" handleClick={handleFilterClick}/>
          : null
      }
      <IconFilter header={true} header_label="wild sets"     filter="cardSet"         filters={filters} wrapper_class="sidebar-icons" isStandard={false} handleClick={handleFilterClick} />
      <IconFilter header={true} header_label="rarity"        filter="rarity"          filters={filters} wrapper_class="sidebar-icons" handleClick={handleFilterClick}/>

      <IsGoldenFilter/>
    </div>
  );
};

Sidebar.propTypes = {
  faction: PropTypes.array,
  mechanics: PropTypes.array,
  name: PropTypes.array,
  query: PropTypes.object,
  race: PropTypes.array,
  type: PropTypes.array,
};

export default Sidebar;