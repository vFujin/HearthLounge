import React from 'react';
import Select from 'antd/lib/select';
import {Link} from 'react-router';
import{removeQuery} from '../../../utils/utils-router';
import 'antd/lib/select/style/css';

const InputFilter = props => {

  const {attribute, filter, handleInputChange, query} = props;
  const Option = Select.Option;

  const queries = attr =>{
    return Object.assign({}, query, {[filter]: attr});
  };

  const options = attribute.map(a=> (
        <Option value={a} key={a}>
          <Link to={{pathname: 'cards', query: queries(a)}}>{a}</Link>
        </Option>
      ));

  const placeholder = attribute.slice(0,3).map(x=>x).join(", ").toLowerCase();
  return (
      <div className="input-filter-wrapper">
        <h4>{filter}</h4>
        <Select multiple
                style={{width: "100%"}}
                placeholder={`${placeholder}...`} onChange={(e)=>handleInputChange(e)} onDeselect={()=>removeQuery(filter)}>
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