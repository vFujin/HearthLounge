import React from 'react';
import PropTypes from 'prop-types';
import Select from 'antd/lib/select';
import {addQuery, removeQuery} from '../../../utils/utils-router';
import 'antd/lib/select/style/css';
import Loader from "../../../components/loaders/loader";

const InputFilter = ({data, dataLoading, filter, multiple, query}) => {
  const Option = Select.Option;

  const getUniqueAttributes = (filter) => {
    if(!dataLoading) {
      let initialFiltering = data.filter(x => x[filter]).map(x => x[filter]);
      switch (filter) {
        case 'name':
        case 'faction':
        case 'race':
        case 'cardSet':
        case 'type':
          return initialFiltering.map(x => x).filter((x, i, a) => a.indexOf(x) === i);
        case 'cost':
          return data.filter(x => x.cost).map(x => x.cost).filter((x, i, a) => a.indexOf(x) === i);
        case 'mechanics':
          return initialFiltering.reduce((a, b) => a.concat(b)).map(x => x.name).filter((x, i, a) => a.indexOf(x) === i);
      }
    }
  };

  const queries = attr =>{
    return Object.assign({}, query, {[filter]: attr});
  };

  const options = dataLoading ? null : getUniqueAttributes(filter).map(a=> (
      <Option instancePrefix={a} optionIndex={a} option={a} value={a} key={a}>{a}</Option>
  ));


  const placeholder = dataLoading ? "Loading" : getUniqueAttributes(filter).slice(0,3).map(x=>x).join(", ").toLowerCase();
  return (
      <div className="input-filter-wrapper">
        <h4>{filter}</h4>
        <Select mode={multiple ? "multiple" : null}
                showSearch={multiple === false ? true : false}
                allowClear={multiple === false ? true : false}
                style={{width: "100%"}}
                notFoundContent={dataLoading ? <Loader/> : null}
                placeholder={`${placeholder}...`}
                onChange={(e)=>addQuery(queries(e))}
                onDeselect={()=>removeQuery(filter)}
                value={query[filter]}>
          {options}
        </Select>
      </div>
  );
};

InputFilter.propTypes = {
  attribute: PropTypes.array,
  filter: PropTypes.string,
  multiple: PropTypes.bool,
  query: PropTypes.object
};


export default InputFilter;