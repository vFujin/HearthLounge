import React from 'react';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

const InputFilter = props => {

  const {attribute, filter} = props;
  const Option = Select.Option;

  const options = attribute.map(a=> (
        <Option value={a} key={a}>{a}</Option>
      ));

  const placeholder = attribute.slice(0,3).map(x=>x).join(", ").toLowerCase();
  return (
      <div className="input-filter-wrapper">
        <h4>{filter}</h4>
        <Select multiple
                style={{width: "100%"}}
                placeholder={`${placeholder}...`} onChange={(e)=>props.handleInputChange(e)}>
          {options}
        </Select>
      </div>
  );
};


export default InputFilter;