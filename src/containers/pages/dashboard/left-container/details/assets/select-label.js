import React from 'react';
import Select from 'antd/lib/select';
import {dashboard_data} from '../../../../../../data/dashboard';

const SelectLabel = ({id, title, placeholder, disabled, handleSelectChange}) => {
  const Option = Select.Option;
  const classesPlaceholder = <span className="hs-icon icon-warlock placeholder-icon"></span>;

  const options = (opt) => {
    return dashboard_data[opt].map(el => (
        <Option className={`${opt}-list ${title}`} title={el} instancePrefix={el} optionIndex={el} option={el} value={el} key={el}>
          <span className={`hs-icon icon-${el.toLowerCase()}`}></span>
          <p className={opt}>{el}</p>
        </Option>
    ));
  };


  const select = (opt, placeholder) =>{
    return(
          <Select multiple={false}
                  style={{width: "50%"}}
                  placeholder={placeholder}
                  allowClear={true}
                  showSearch={true}
                  disabled={!disabled}
                  onChange={(v) => handleSelectChange(v, title)}>
            {options(opt)}
          </Select>
    )
  };
  return(
    <label htmlFor={id}>
      <p>{title}:</p>
      {select(id, placeholder === 'classes' ? classesPlaceholder : placeholder)}
    </label>
  )
};


export default SelectLabel;