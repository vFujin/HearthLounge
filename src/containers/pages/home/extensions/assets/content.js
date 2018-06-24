import React from 'react';
import {Link} from 'react-router-dom';

const ExtensionContent = ({extensionType, url, img}) => (
  <Link className="extension__content" key={url} to={`/extensions/${url}/overview`}>
    <img src={img} alt={`${url}'s art`}/>
  </Link>
);

export default ExtensionContent;
