import React from 'react';
import {Link} from 'react-router';

const ExtensionContent = ({extensionType, url, img}) => (
  <Link className="extension__content" key={url} to={`/${extensionType}s/${url}/overview`}>
    <img src={img} alt={`${url}'s art`}/>
  </Link>
);

export default ExtensionContent;