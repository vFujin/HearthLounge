import React from 'react';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

const InputFilter = props => {

  const {attribute, filter, handleInputChange} = props;
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
                placeholder={`${placeholder}...`} onChange={(e)=>handleInputChange(e)}>
          {options}
        </Select>
      </div>
  );
};

InputFilter.propTypes = {
  attribute: React.PropTypes.array,
  filter: React.PropTypes.string,
  handleInputChange: React.PropTypes.func
};

export default InputFilter;