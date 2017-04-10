import React from 'react';
import Tooltip from 'antd/lib/tooltip';
import Input from 'antd/lib/input';
import _ from 'lodash';

const IconLabel = ({id, title, placeholder}) => {
  const capitalizedTitle = _.capitalize(title);
  const suffix = () => {
    switch(title){
      case 'facebook':
      case 'twitter':
      case 'youtube': return 'com';
      case 'twitch': return 'tv';

    }
  };

  const link = !(title === 'battle tag') ? `https://${title}.${suffix()}/` : false;

  return(
      <label htmlFor={id}>
        <Tooltip title={capitalizedTitle} placement="right">
          <span className={`hs-icon icon-${id}`}></span>
        </Tooltip>
        <Input id={id} placeholder={placeholder} addonBefore={link}/>
      </label>
  )
};

export default IconLabel;