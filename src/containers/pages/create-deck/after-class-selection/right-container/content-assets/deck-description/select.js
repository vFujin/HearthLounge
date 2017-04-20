import React from 'react';
import Select from 'antd/lib/select';
import {icon_filters} from '../../../../../../../data/filters';
import _ from 'lodash';

const FormSelect = ({params, section}) =>{
  const Option = Select.Option;
  const options = icon_filters[section].map(el=> (
      <Option value={el.name} key={el.name}>{_.startCase(el.name)} {_.upperFirst(params)}</Option>
  ));

  return(
      <Select showSearch
              style={{ width: 200 }}
              placeholder={`Select ${section}`}
              optionFilterProp="children"
              filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
        {options}
      </Select>
  )
};

export default FormSelect;