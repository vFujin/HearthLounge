import React from 'react';
import PropTypes from 'prop-types';
import Select from 'antd/lib/select';
import _ from 'lodash';
import {cardsPlaceholder, gameInfoPlaceholder} from "../utils/input-placeholders";
import FilterHeader from "./filter-header";
import 'antd/lib/select/style/css';

const InputFilter = ({data, type, filter, multiple = true, filters, handleInputChange, handleFilterReset}) => {
  const Option = Select.Option;
  const dataArrayIsArray = data.constructor === Array;

  const options = () => {
    if (type === "cards") {
      return dataArrayIsArray && data.map(card => (
        <Option value={card.name} key={card.dbfId}>{_.startCase(card.name)}</Option>
      ));
    }
    return data[`${filter}s`] && data[`${filter}s`].map((info, i) => (
      <Option value={info} key={i}>{_.startCase(info)}</Option>
    ));
  };

  const placeholder = () => {
    if(type === "cards"){
      return cardsPlaceholder(data, dataArrayIsArray);
    }
    return gameInfoPlaceholder(data, `${filter}s`);
  };

  return (
      <div className="sidebar__body--filter-wrapper" id={`id-${filter}`}>
        <FilterHeader filter={filter} filters={filters} handleFilterReset={handleFilterReset}/>
        <Select mode={multiple && "multiple"}
                showSearch={!multiple}
                allowClear={!multiple}
                style={{width: "100%"}}
                notFoundContent={data.error || "Couldn't find cards that match your query"}
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