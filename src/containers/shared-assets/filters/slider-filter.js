import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'antd/lib/slider';
import Tooltip from 'antd/lib/tooltip';
import {Link} from 'react-router-dom';
import {addQuery} from '../../../utils/utils-router';
import 'antd/lib/slider/style/css';

const SliderFilter = ({defaultValue, marks, max, filter, filters, handleSliderClick}) => {

  const queries = attr =>{
    return Object.assign({}, filters, {[filter]: attr});
  };

  const checkHealthProp = () => {
    if (filter in filters) return true;
  };

  return (
      <div className="slider-filter-wrapper">
        <div className="slider-filter-header">
          <h4>{filter}</h4>
          <Tooltip placement="left" title="Clear">
            <Link to={'/cards'}>
              <button className={`${checkHealthProp() !== true ? 'display-none' : ''}`}>✕</button>
            </Link>
          </Tooltip>
        </div>
        <Slider range marks={marks} defaultValue={defaultValue} max={max} onAfterChange={(e)=>handleSliderClick(e, filter)}/>
      </div>
  );
};




SliderFilter.propTypes = {
  defaultValue: PropTypes.array,
  filter: PropTypes.string,
  marks: PropTypes.object,
  max: PropTypes.number,
  query: PropTypes.object
};


export default SliderFilter;