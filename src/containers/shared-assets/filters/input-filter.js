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


  return (
      <Select.Async
          name="form-field-name"
          value="one"
          loadOptions={c()}
      />
  );
};


export default InputFilter;