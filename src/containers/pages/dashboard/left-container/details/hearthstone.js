import React from 'react';
import Select from 'antd/lib/select';
import {dashboard_data} from '../../../../../data/dashboard';
import DetailHeader from './detail-header';
const HearthstoneDetails = () => {
  const Option = Select.Option;
  const classesPlaceholder = <span className="hs-icon icon-warlock placeholder-icon"></span>;

  const options = (opt) => {
    return dashboard_data[opt].map(el => (
        <Option className={`${opt}-list`} title={el} instancePrefix={el} optionIndex={el} option={el} value={el} key={el}>
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
                showSearch={true}>
          {options(opt)}
        </Select>
    )
  };

  return(
      <li className="hearthstone">
        <DetailHeader title="hearthstone"/>
        <div className="details-content">
          <label htmlFor="battletag">
            <span className="hs-icon icon-battlenet"></span>
            <input id="battletag" type="text" placeholder="Placeholder#0000"/>
          </label>
          <label htmlFor="favourite-class">
            <p>Favourite class:</p>
            {select('classes', classesPlaceholder)}
          </label>
          <label htmlFor="region">
            <p>Region:</p>
            {select('region', 'EU > NA')}
          </label>
        </div>
      </li>
  )
};

export default HearthstoneDetails;