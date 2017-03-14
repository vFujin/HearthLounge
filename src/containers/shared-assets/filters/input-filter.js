import React from 'react';
import Select from 'react-select';
import 'whatwg-fetch';


const InputFilter = props => {

  const c = () => {
    if (props.data < 1) {
      return <p>''</p>;
    }
    else {
      return props.data
    }
  };

  console.log(props.statistics, props.data);
  return (
      <Select.Async
          name="form-field-name"
          value={props.statistics}
          loadOptions={c()}
          onChange={props.handleInputFilter.bind(this, 'statistics')}
          multi={true}
      />
  );
};


export default InputFilter;