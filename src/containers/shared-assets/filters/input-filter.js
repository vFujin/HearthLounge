import React from 'react';
import PropTypes from 'prop-types';
import Select from 'antd/lib/select';
import {addQuery, removeQuery} from '../../../utils/utils-router';
import 'antd/lib/select/style/css';

const InputFilter = ({attribute, filter, multiple, query}) => {
  const Option = Select.Option;

  const queries = attr =>{
    return Object.assign({}, query, {[filter]: attr});
  };

  const options = attribute && attribute.map(a=> (
      <Option instancePrefix={a} optionIndex={a} option={a} value={a} key={a}>{a}</Option>
  ));


  const placeholder = attribute.slice(0,3).map(x=>x).join(", ").toLowerCase();
  return (
      <div className="input-filter-wrapper">
        <h4>{filter}</h4>
        <Select mode={multiple ? "multiple" : null}
                showSearch={multiple === false ? true : false}
                allowClear={multiple === false ? true : false}
                style={{width: "100%"}}
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