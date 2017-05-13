import React from 'react';

import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

const LeftContainer = ({users}) => {
  const Option = Select.Option;
  let options;
  if(users.length > 0) {
    options = users.map(a => <Option value={a} key={a}>{a}</Option>);
  }
  return (
      <div className="container__page--inner container__page--left">
        <h3 className="sidebar__header">Filters</h3>
        <div className="sidebar__body">
          <div className="input-filter-wrapper">
            <h4>Author</h4>
            <Select style={{width: "100%"}}>
              {options}
            </Select>
          </div>
        </div>
      </div>
  );
};

export default LeftContainer;