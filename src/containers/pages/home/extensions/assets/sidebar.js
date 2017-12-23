import React from 'react';
import {Link} from 'react-router-dom';
import Icon from "../../../../../components/icon";

const ExtensionSidebar = ({extensionType, extensionUrl, extensionTabs}) => (

  <div className="extension__sidebar">
    {extensionTabs.map(tab => <Link key={tab.url} to={`/${extensionType}s/${extensionUrl}/${tab.url}`}>{tab.name}</Link>)}
    <Icon name={extensionUrl}/>
  </div>
);

export default ExtensionSidebar;