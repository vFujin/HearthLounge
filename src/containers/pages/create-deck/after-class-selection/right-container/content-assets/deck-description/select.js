import React from 'react';
import Select from 'antd/lib/select';
import {icon_filters} from '../../../../../../../data/filters';
import _ from 'lodash';

const FormSelect = ({hsClass, section, handleSelectChange}) =>{
  const Option = Select.Option;
  const firstVal = _.startCase(icon_filters[section].map(v=>v.name)[0]);
  let ifHsClass = hsClass ? hsClass : '';

  const options = icon_filters[section].map(el=> (
      <Option value={`${el.name} ${ifHsClass}`} key={el.name}>{_.startCase(el.name)} {_.upperFirst(hsClass)}</Option>
  ));

  return(
      <div className="select-wrapper">
        <label htmlFor="">Select {section}:</label>
        <Select showSearch
                notFoundContent="Not Found"
                style={{ width: '50%' }}
                optionFilterProp="children"
                defaultValue={section==="archetype" ? `${firstVal} ${hsClass}` : firstVal }
                onChange={handleSelectChange}
                filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
          {options}
        </Select>
      </div>
  )
};

export default FormSelect;