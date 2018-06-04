import React from 'react';
import _ from 'lodash';
import {extensionBossExists, extensionWingExists} from "../../../../utils/checkIfPathExist";
import ExtensionDetails from './details';
import NotFound from "../../../../components/not-found/not-found";

const Content = ({detailsChild, details, extension, extensionType}) => {

  const detailsPath = extension.extension_topbar_tabs
    .map(tab => tab.url)
    .includes(details);

  const wingDetailsPath = detailsChild
    ? extensionWingExists(extensionType, extension.url, details)
    : null;
  const bossDetailsPath = (detailsChild && wingDetailsPath)
    ? extensionBossExists(extensionType, extension.url, details, detailsChild)
    : null;

  const notFoundPage = (detailsChild && wingDetailsPath) ? _.startCase(detailsChild) : _.startCase(details);

  return (detailsPath || (wingDetailsPath && bossDetailsPath))
    ? <ExtensionDetails extension={extension}
                        extensionType={extensionType}
                        detailsChild={detailsChild}
                        details={details}/>
    : <NotFound page={notFoundPage} redirect="extensions"/>

};

export default Content;
