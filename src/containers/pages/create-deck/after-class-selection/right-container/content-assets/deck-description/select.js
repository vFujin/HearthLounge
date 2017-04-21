import React from 'react';
import Select from 'antd/lib/select';
import {icon_filters} from '../../../../../../../data/filters';
import _ from 'lodash';

const FormSelect = ({hsClass, section, handleSelectChange}) =>{
  const Option = Select.Option;
  let ifHsClass = hsClass ? hsClass : '';
  const options = icon_filters[section].map(el=> (
      <Option value={`${el.name} ${ifHsClass}`} key={el.name}>{_.startCase(el.name)} {_.upperFirst(hsClass)}</Option>
  ));

  return(
      <Select showSearch
              notFoundContent="Not Found"
              style={{ width: 200 }}
              placeholder={`Select ${section}`}
              optionFilterProp="children"
              onChange={handleSelectChange}
              filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
        {options}
      </Select>
  )
};

export default FormSelect;