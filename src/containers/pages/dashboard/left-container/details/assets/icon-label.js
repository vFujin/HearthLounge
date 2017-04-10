import React from 'react';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';

const IconLabel = ({id, title, placeholder, disabled}) => {
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
        <div className='wrapper'>
          <p>{link}</p>
          <input disabled={!disabled} id={id} placeholder={placeholder} />
        </div>
      </label>
  )
};

export default IconLabel;