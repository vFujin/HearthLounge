import React from 'react';
import Select from 'antd/lib/select';
import 'antd/dist/antd.min.css';

const InputFilter = props => {

  const {attribute, filter} = props;
  const Option = Select.Option;

  const options = attribute.map(a=> (
        <Option value={a} key={a}>{a}</Option>
      ));

  const handleClick = (values) =>{
    return values;
  };


  return (
      <Select multiple
              style={{width: "100%"}}
              placeholder={filter} onChange={(e)=>handleClick(e)}>
        {options}
      </Select>
  );
};


export default InputFilter;