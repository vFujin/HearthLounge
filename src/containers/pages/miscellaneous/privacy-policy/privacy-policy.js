import React from 'react';
import Introduction from "./introduction";
import TableOfContents from "./table-of-contents";
import Content from "./content";

const PrivacyPolicy = () => {
  return (
    <div className="content privacy-policy">
      <Introduction/>
      <div className="wrapper">
        <div className="inner-wrapper">
          <h3>Table of Contents</h3>
          <TableOfContents/>
        </div>
        <div className="inner-wrapper">
          <h3>Content</h3>
          <Content/>
        </div>
      </div>
    </div>
  )
};

export default PrivacyPolicy;