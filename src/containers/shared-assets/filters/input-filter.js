import React from 'react';
import PropTypes from 'prop-types';
import Select from 'antd/lib/select';
import {addQuery, removeQuery} from '../../../utils/utils-router';
import 'antd/lib/select/style/css';
import Loader from "../../../components/loaders/loader";

const InputFilter = ({cards, filter, multiple, filters, handleInputChange}) => {
  const Option = Select.Option;
  const cardsArrayIsArray = cards.constructor === Array;
  const options = cardsArrayIsArray && cards.map(card=> (
      <Option instancePrefix={card.dbfId} optionIndex={card.dbfId} option={card.name} value={card.name} key={card.dbfId}>{card.name}</Option>
  ));

  const placeholder = () => {
    if (cards.length === 0) {
      return <Loader theme="light" sideLength={10}/>;
    }

    else if(!cardsArrayIsArray){
      return cards.error;
    }
    else {
      const length = 3;
      const placeholder = cardsArrayIsArray && cards.slice(0, length).map(card => card.name).join(", ");
      if (cardsArrayIsArray && cards.length <= length) {
        return placeholder;
      }
      return `${placeholder}...`;
    }
  };

  return (
      <div className="input-filter-wrapper">
        <h4>{filter}</h4>
        <Select mode={multiple && "multiple"}
                showSearch={!multiple}
                allowClear={!multiple}
                style={{width: "100%"}}
                notFoundContent={cards.error}
                placeholder={placeholder()}
                onChange={(e)=>handleInputChange(e, filter)}
                value={filters[filter]}>
          {options}
        </Select>
      </div>
  );
};

InputFilter.propTypes = {
  attribute: PropTypes.array,
  filter: PropTypes.string,
  multiple: PropTypes.bool,
  query: PropTypes.object
};


export default InputFilter;