import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'antd/lib/slider';
import Tooltip from 'antd/lib/tooltip'
import 'antd/lib/slider/style/css';

const SliderFilter = ({filter, value, defaultValue, max, marks, handleSelect}) => {

  return (
      <div className="slider-filter-wrapper">
        <div className="slider-filter-header">
          <h4>{filter}</h4>
          <Tooltip placement="left" title="Clear">
             <button>✕</button>
          </Tooltip>
        </div>
        <Slider range
                marks={marks}
                defaultValue={defaultValue}
                max={max}
                onChange={(e)=>handleSelect(e, filter)}
                value={value}/>
      </div>
  );
};

SliderFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  value: PropTypes.array,
  defaultValue: PropTypes.array.isRequired,
  max: PropTypes.number.isRequired,
  marks: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired
};


export default SliderFilter;