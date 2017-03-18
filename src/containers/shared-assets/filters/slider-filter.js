import React from 'react';
import Slider from 'antd/lib/slider';
import {addQuery} from '../../../utils/utils-router';
import 'antd/lib/slider/style/css';

const SliderFilter = props => {
  const {filter, query} = props;

  const queries = attr =>{
    console.log(attr);
    return Object.assign({}, query, {[filter]: attr});
  };

  const marks = {
    0: 0,
    50: {
      style: {
        left: '100%'
      },
      label: 50
    },
  };

  return (
      <div className="input-filter-wrapper">
        <h4>{filter}</h4>
          <Slider range marks={marks} defaultValue={[0, 30]} max={50} onChange={(e)=>addQuery(queries(e))}/>
      </div>
  );
};

SliderFilter.propTypes = {
  filter: React.PropTypes.string,
  query: React.PropTypes.object
};


export default SliderFilter;