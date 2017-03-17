import React from 'react';
import Select from 'antd/lib/select';
import {addQuery, removeQuery} from '../../../utils/utils-router';
import 'antd/lib/select/style/css';

const InputFilter = props => {
  const {attribute, filter, handleInputChange, query} = props;
  const Option = Select.Option;

  const queries = attr =>{
    return Object.assign({}, query, {[filter]: attr});
  };

  const options = attribute.map(a=> (
      <Option instancePrefix={a} optionIndex={a} option={a} value={a} key={a}>{a}</Option>
  ));

  const placeholder = attribute.slice(0,3).map(x=>x).join(", ").toLowerCase();
  return (
      <div className="input-filter-wrapper">
        <h4>{filter}</h4>
        <Select multiple={props.multiple}
                showSearch={props.multiple === false ? true : false}
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
  attribute: React.PropTypes.array,
  filter: React.PropTypes.string,
  handleInputChange: React.PropTypes.func,
  query: React.PropTypes.object
};


export default InputFilter;