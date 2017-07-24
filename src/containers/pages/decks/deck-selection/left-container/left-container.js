import React from 'react';

import Select from 'antd/lib/select';
import Loader from '../../../../../components/loader';
import 'antd/lib/select/style/css';

const LeftContainer = ({users}) => {
  const Option = Select.Option;

  let options = users.map(a => <Option value={a} option={a} key={a}>{a}</Option>);
  return (
      <div className="container__page--inner container__page--left">
        <h3 className="sidebar__header">Filters</h3>
        <div className="sidebar__body">
          <div className="input-filter-wrapper">
            <h4>Author</h4>
            <Select notFoundContent={users.length < 1 ? <Loader /> : null}
                    placeholder="Search decks by author"
                    style={{width: "100%"}}>
              {options}
            </Select>
          </div>
        </div>
      </div>
  );
};

export default LeftContainer;