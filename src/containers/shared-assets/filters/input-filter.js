import React from 'react';
import PropTypes from 'prop-types';
import Select from 'antd/lib/select';
import {cardsPlaceholder, gameInfoPlaceholder, customInfoPlaceholder} from "../../../components/cards/utils/input-placeholders";
import 'antd/lib/select/style/css';

const InputFilter = ({data, type, filter, multiple, filters, handleInputChange}) => {
  const Option = Select.Option;
  const validateData = () =>{
    if(!data.loading && filter === "mechanic"){
      let mechanics = data.allCards.filter(c => c[`${filter}s`])
        .map(x => x[`${filter}s`])
        .reduce((a, b) => a.concat(b))
        .map(x => x.name);
      let uniqueMechanis = [...new Set(mechanics)];
      return uniqueMechanis;
    }
    return data;
  };

  const dataArrayIsArray = validateData().constructor === Array;

  const options = () => {
    switch(type) {
      case "cards":
        return dataArrayIsArray && validateData().map(card => (
          <Option instancePrefix={card.dbfId} optionIndex={card.dbfId} option={card.name} value={card.name}
                  key={card.dbfId}>{card.name}</Option>
        ));

      case "customInfo":
        return !data.loading && validateData().map((info, i) => (
          <Option instancePrefix={i} optionIndex={i} option={info} value={info} key={i}>{info}</Option>
        ));

      default:
        return validateData()[`${filter}s`] && validateData()[`${filter}s`].map((info, i) => (
          <Option instancePrefix={i} optionIndex={i} option={info} value={info} key={i}>{info}</Option>
        ));
    }
  };

  const placeholder = () => {
    switch(type){
      case "cards": return cardsPlaceholder(validateData(), dataArrayIsArray);
      case "customInfo": return customInfoPlaceholder(data.loading, data.error, validateData());
      default: return gameInfoPlaceholder(validateData(), `${filter}s`);
    }
  };


  return (
      <div className="input-filter-wrapper">
        <h4>{filter}</h4>
        <Select mode={multiple && "multiple"}
                showSearch={!multiple}
                allowClear={!multiple}
                style={{width: "100%"}}
                notFoundContent={validateData().error || "Couldn't find cards that match your query"}
                placeholder={placeholder()}
                onChange={(e)=>handleInputChange(e, filter)}
                onDeselect={e=>handleInputChange(e, filter)}
                value={filters[filter]}>
          {options()}
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