import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'antd/lib/slider';
import Tooltip from 'antd/lib/tooltip';
import {Link} from 'react-router-dom';
import {addQuery} from '../../../utils/utils-router';
import 'antd/lib/slider/style/css';

const SliderFilter = props => {
  const {defaultValue, marks, max, filter, query} = props;

  const queries = attr =>{
    return Object.assign({}, query, {[filter]: attr});
  };

  const checkHealthProp = () => {
    if (filter in query) return true;
  };

  function x(values){
    let z = values;
    addQuery(queries(z))
  }

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
        <Slider range marks={marks} defaultValue={defaultValue} max={max} onChange={x}/>
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