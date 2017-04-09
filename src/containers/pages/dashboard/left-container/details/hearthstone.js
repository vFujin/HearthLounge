import React from 'react';
import Select from 'antd/lib/select';
import {dashboard_data} from '../../../../../data/dashboard';

const HearthstoneDetails = () => {
  const Option = Select.Option;
  const options = (opt) => {
    return dashboard_data[opt].map(el => (
        <Option className={`${opt}-list`} title={el} instancePrefix={el} optionIndex={el} option={el} value={el} key={el}>
          <span className={`hs-icon icon-${el.toLowerCase()}`}></span>
          <p className={opt}>{el}</p>
        </Option>
    ));
  };

  return(
      <li className="hearthstone">
        <h3>Hearthstone</h3>
        <div className="details-content">
          <label htmlFor="battletag">
            <span className="hs-icon icon-battlenet"></span>
            <input id="battletag" type="text" value="Placeholder#0000"/>
          </label>
          <label htmlFor="favourite-class">
            <p>Favourite class:</p>
            <Select multiple={false}
                    style={{width: "50%"}}
                    placeholder={<span className="hs-icon icon-warlock placeholder-icon"></span>}
                    allowClear={true}>
              {options('classes')}
            </Select>
          </label>
          <label htmlFor="region">
            <p>Region:</p>
            <Select multiple={false}
                    style={{width: "50%"}}
                    placeholder="EU #1"
                    allowClear={true}>
              {options('region')}
            </Select>
          </label>
        </div>
      </li>
  )
};

export default HearthstoneDetails;