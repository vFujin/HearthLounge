import React from 'react';
import Introduction from "./introduction";
import TableOfContents from "./table-of-contents";
import Content from "./content";

const PrivacyPolicy = () =>{
  return (
      <div className="container__page">
        <Introduction />
        <div className="wrapper">
          <TableOfContents />
          <Content />
        </div>
      </div>
  )
};

export default PrivacyPolicy;