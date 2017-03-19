import React from 'react';
import Slider from 'antd/lib/slider';
import {addQuery, removeQuery} from '../../../utils/utils-router';
import 'antd/lib/slider/style/css';

const SliderFilter = props => {
  const {defaultValue, marks, max, filter, query} = props;

  const queries = attr =>{
    return Object.assign({}, query, {[filter]: attr});
  };

  const checkHealthProp = () => {
    if (filter in query) return true;
  };

  return (
      <div className="input-filter-wrapper">
        <h4>{filter} <button onClick={(e)=>removeQuery(filter)} className={`btn-pearl btn-padding-small ${checkHealthProp() !== true ? 'display-none' : ''}`}>x</button></h4>
          <Slider range marks={marks} defaultValue={defaultValue} max={max} onChange={(e)=>addQuery(queries(e))}/>
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