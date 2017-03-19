import React from 'react';
import Slider from 'antd/lib/slider';
import {addQuery, removeQuery} from '../../../utils/utils-router';
import 'antd/lib/slider/style/css';

const SliderFilter = props => {
  const {filter, query} = props;

  const queries = attr =>{
    return Object.assign({}, query, {[filter]: attr});
  };

  const checkHealthProp = () => {
    if ('health' in query) return true;
  };

  const marks = {
    0: 0,
    30: 30,
    50: 50
  };

  return (
      <div className="input-filter-wrapper">
        <h4>{filter} <button onClick={(e)=>removeQuery('health')} className={`btn-pearl btn-padding-small ${checkHealthProp() !== true ? 'display-none' : ''}`}>x</button></h4>
          <Slider range marks={marks} defaultValue={[0, 30]} max={50} onChange={(e)=>addQuery(queries(e))}/>
      </div>
  );
};



SliderFilter.propTypes = {
  filter: React.PropTypes.string,
  query: React.PropTypes.object
};


export default SliderFilter;