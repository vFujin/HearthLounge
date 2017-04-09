import React from 'react';
import Select from 'antd/lib/select';
import {dashboard_data} from '../../../../../data/dashboard';

const HearthstoneDetails = () => {
  const Option = Select.Option;
  const options = (opt) => {
    return dashboard_data[opt].map(a => (
        <Option instancePrefix={a} optionIndex={a} option={a} value={a} key={a}>{a}</Option>
    ));
  };

  return(
      <li className="hearthstone">
        <h3>Hearthstone</h3>
        <div>
          <label htmlFor="battletag">
            <span className="hs-icon icon-battlenet"></span>
            <input id="battletag" type="text" value="Placeholder#0000"/>
          </label>
          <label htmlFor="favourite-class">
            <p>Favourite class:</p>
            <span className="hs-icon icon-warlock"></span>
            {/*<input id="favourite-class" type="text" value="Warlock"/>*/}
          </label>
          <label htmlFor="region">
            <p>Region:</p>
            <Select multiple={false}
                    style={{width: "100%"}}
                    placeholder="EU #1">
              {options('region')}
            </Select>
          </label>
        </div>
      </li>
  )
};

export default HearthstoneDetails;