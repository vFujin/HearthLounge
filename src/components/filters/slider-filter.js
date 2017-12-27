import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'antd/lib/slider';
import FilterHeader from "./filter-header";
import 'antd/lib/slider/style/css';

const SliderFilter = ({defaultValue, marks, max, filter, filters, handleSliderClick}) => (
  <div className="sidebar__body--filter-wrapper">
    <FilterHeader filter={filter} filters={filters}/>
    <Slider range marks={marks} defaultValue={defaultValue} max={max} onAfterChange={(e)=>handleSliderClick(e, filter)}/>
  </div>
);

SliderFilter.propTypes = {
  defaultValue: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  marks: PropTypes.object.isRequired,
  max: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
  handleSliderClick: PropTypes.func.isRequired
};


export default SliderFilter;