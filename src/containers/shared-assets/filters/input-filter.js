import React from 'react';
import Select from 'antd/lib/select';
import {Link} from 'react-router';
import 'antd/dist/antd.min.css';



const InputFilter = props => {
  const {filter, query} = props;
  const Option = Select.Option;

  const queries = (attr) =>{
    return Object.assign({}, query, {[filter]: attr});
  };

  const options = props.attribute.map(attr=> (
      <Option key={attr}>
        <Link to={{pathname: 'cards', query: queries(attr.toLowerCase())}}>{attr}</Link>
      </Option>
  ));

  return (
      <Select multiple style={{width: "100%"}} placeholder="Race">
        {options}
      </Select>
  );
};


export default InputFilter;