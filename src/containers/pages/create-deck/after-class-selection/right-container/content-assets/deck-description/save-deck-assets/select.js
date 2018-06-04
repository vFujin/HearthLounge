import React from 'react';
import Select from 'antd/lib/select';
import {icon_filters} from '../../../../../../../../globals/filters';
import _ from 'lodash';
import {extension_details} from "../../../../../../../../globals/extension-details";
import Icon from "../../../../../../../../components/icon";

const FormSelect = ({playerClass, value, deckAdventure, section, handleSelectChange}) =>{
  const {Option, OptGroup} = Select;
  const isArchetype = (el) => {
    if(playerClass){
      return `${el.name} ${playerClass}`
    }
    return el.name
  };

  const mapAdventures = () =>{
    return _.map(extension_details.adventures, adventure =>
        <Option value={adventure.name}
                title={adventure.name}
                key={adventure.url}>
          <Icon name={adventure.url} /> {adventure.name}
        </Option>
    )
  };

  const mapBosses = () =>{
    const wing = extension_details.adventures.find(adventure => adventure.name === deckAdventure).wings.details;
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
