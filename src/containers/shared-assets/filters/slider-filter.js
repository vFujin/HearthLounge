import React from 'react';
import Slider from 'antd/lib/slider';
import Tooltip from 'antd/lib/tooltip';
import {Link} from 'react-router';
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
    console.log(z)
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
  defaultValue: React.PropTypes.array,
  filter: React.PropTypes.string,
  marks: React.PropTypes.object,
  max: React.PropTypes.number,
  query: React.PropTypes.object
};


export default SliderFilter;