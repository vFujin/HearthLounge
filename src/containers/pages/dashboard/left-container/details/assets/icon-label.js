import React from 'react';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';

const IconLabel = ({id, title, placeholder, disabled, handleInputChange}) => {
  const capitalizedTitle = _.capitalize(title);
  const suffix = () => {
    switch(title){
      case 'facebook':
      case 'twitter':
      case 'youtube': return 'com';
      case 'twitch': return 'tv';
      default: return title;
    }
  };

  const link = !(title === 'battle tag') ? <p>https://{title}.{suffix()}/</p> : null;

  return(
      <label htmlFor={id}>
        <Tooltip title={capitalizedTitle} placement="right">
          <span className={`hs-icon icon-${id === 'battletag' ? 'battlenet' : id}`}></span>
        </Tooltip>
        <div className='wrapper'>
          {link}
          <input onChange={handleInputChange} disabled={!disabled} id={id} placeholder={placeholder} />
        </div>
      </label>
  )
};

export default IconLabel;