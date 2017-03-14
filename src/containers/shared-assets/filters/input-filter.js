import React from 'react';
import Select from 'antd/lib/select';
import {Link} from 'react-router';
// import 'antd/dist/antd.min.css';



const InputFilter = props => {
  const {filter, query} = props;
  const Option = Select.Option;

  const queries = (a, attribute_map) =>{

    return Object.assign({}, query, {[filter]: a});
  };



  const options = props.attribute.map(a=> (
      <Option value={a} key={a} >
        <Link onClick={(e)=>handleClick(e)} to={{pathname: 'cards', query: queries(a, props.attribute)}}>{a}</Link>
      </Option>
  ));

  const handleClick = (e) =>{
    let arr = [];
    console.log(e, options.map(x=>x.key));
  }

  return (
      <Select multiple
              filterOption={true}
              style={{width: "100%"}}
              placeholder="Race">
        {options}
      </Select>
  );
};


export default InputFilter;