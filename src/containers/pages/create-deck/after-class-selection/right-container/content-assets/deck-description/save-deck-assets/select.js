import React from 'react';
import Select from 'antd/lib/select';
import {icon_filters} from '../../../../../../../../globals/filters';
import {adventure_details} from '../../../../../../../../globals/adventure-details';
import _ from 'lodash';

const FormSelect = ({playerClass, value, deckAdventure, section, handleSelectChange}) =>{
  const {Option, OptGroup} = Select;
  const isArchetype = (el) => {
    if(playerClass){
      return `${el.name} ${playerClass}`
    }
    return el.name
  };

  const mapAdventures = () =>{
    return _.map(adventure_details, adventure =>
        <Option value={adventure.adventure}
                title={adventure.adventure}
                key={adventure.url}>
          <span className={`hs-icon icon-${adventure.url}`}></span> {adventure.adventure}
        </Option>
    )
  };

  const mapBosses = () =>{
    const wing = adventure_details.filter(adventure => adventure.adventure === deckAdventure)[0].wings.details;
    const bosses = wing => wing.bosses.map(boss => <Option value={boss.name} key={boss.name}>{boss.name}</Option>);

    return _.map(wing, wing =>
        <OptGroup key={wing.url} label={wing.wing_title}>
          {bosses(wing)}
        </OptGroup>
    );
  };

  const mapDefault = () =>{
    return icon_filters[section].map(el =>
        <Option value={isArchetype(el)}
                key={el.name}>
          {_.startCase(el.name)} {_.upperFirst(playerClass)}
        </Option>
    );
  };

  const options = () =>{
    switch(section) {
      case 'adventure': return mapAdventures();
      case 'boss': return mapBosses();
      default: return mapDefault();
    }
  };

  return(
      <div className="select-wrapper">
        <label htmlFor="">Select {section}:</label>
        <Select showSearch
                notFoundContent="Not Found"
                style={{ width: '50%' }}
                optionFilterProp="children"
                defaultValue={_.startCase(value)}
                onChange={(e)=>handleSelectChange(e, section)}
                filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
          {options()}
        </Select>
      </div>
  )
};

export default FormSelect;