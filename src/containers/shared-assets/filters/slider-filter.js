import React from 'react';
import Slider from 'antd/lib/slider';
import {addQuery, removeQuery} from '../../../utils/utils-router';
import 'antd/lib/slider/style/css';

const SliderFilter = props => {
  const {filter, query} = props;

  const queries = attr =>{
    return Object.assign({}, query, {[filter]: attr});
  };

  function onChange(value) {
    console.log('onChange: ', value);
  }

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
          <Slider range marks={marks} defaultValue={[20, 50]} max={50} onChange={onChange}/>
      </div>
  );
};

SliderFilter.propTypes = {
  filter: React.PropTypes.string,
  query: React.PropTypes.object
};


export default SliderFilter;