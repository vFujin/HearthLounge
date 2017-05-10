import React from 'react';
import Select from 'antd/lib/select';
import {icon_filters} from '../../../../../../../../data/filters';
import _ from 'lodash';

const FormSelect = ({hsClass, type, archetype, section, handleSelectChange}) =>{
  const Option = Select.Option;
  let ifHsClass = hsClass ? hsClass : '';

  const options = icon_filters[section].map(el=> (
      <Option value={`${el.name} ${ifHsClass}`} key={el.name}>{_.startCase(el.name)} {_.upperFirst(hsClass)}</Option>
  ));

  return(
      <div className="select-wrapper" id="foo">
        <label htmlFor="">Select {section}:</label>
        <Select showSearch
                notFoundContent="Not Found"
                style={{ width: '50%' }}
                optionFilterProp="children"
                defaultValue={section==="archetype" ? archetype : type}
                onChange={(e)=>handleSelectChange(e, section)}

                filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
          {options}
        </Select>
      </div>
  )
};

export default FormSelect;