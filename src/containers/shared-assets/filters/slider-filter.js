import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'antd/lib/slider';
import Tooltip from 'antd/lib/tooltip';
import {Link} from 'react-router-dom';
import {addQuery} from '../../../utils/utils-router';
import 'antd/lib/slider/style/css';

const SliderFilter = ({defaultValue, marks, max, filter, filters, handleSliderClick}) => (
  <div className="sidebar__body--filter-wrapper">
    <div className="sidebar__body--filter-wrapper__header">
      <h4>{filter}</h4>
      <Tooltip placement="left" title="Clear">
        <Link to={'/cards'}>
          <button className={`${!filters[filter] ? 'display-none' : ''}`}>✕</button>
        </Link>
      </Tooltip>
    </div>
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