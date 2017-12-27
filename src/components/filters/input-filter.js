import React from 'react';
import PropTypes from 'prop-types';
import Select from 'antd/lib/select';
import _ from 'lodash';
import {cardsPlaceholder, gameInfoPlaceholder, customInfoPlaceholder} from "../cards/utils/input-placeholders";
import FilterHeader from "./filter-header";
import 'antd/lib/select/style/css';

const InputFilter = ({data, type, filter, multiple, filters, handleInputChange}) => {
  const Option = Select.Option;

  const validateData = () =>{
    if(!data.loading && filter === "mechanic"){
      let mechanics = data.allCards.filter(c => c[`${filter}s`])
        .map(x => x[`${filter}s`])
        .reduce((a, b) => a.concat(b))
        .map(x => x.name);

      return [...new Set(mechanics)];
    }
    return data;
  };

  const dataArrayIsArray = validateData().constructor === Array;

  const options = () => {
    switch(type) {
      case "cards":
        return dataArrayIsArray && validateData().map(card => (
          <Option value={card.name} key={card.dbfId}>{_.startCase(card.name)}</Option>
        ));

      case "customInfo":
        return !data.loading && validateData().map((info, i) => (
          <Option value={info} key={i}>{_.startCase(info)}</Option>
        ));

      default:
        return validateData()[`${filter}s`] && validateData()[`${filter}s`].map((info, i) => (
          <Option value={info} key={i}>{_.startCase(info)}</Option>
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
      <div className="sidebar__body--filter-wrapper" id={`id-${filter}`}>
        <FilterHeader filter={filter} filters={filters}/>
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