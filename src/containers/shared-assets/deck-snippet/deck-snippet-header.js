import React from 'react';
export const DeckSnippetHeader = (props) => {
  let prefix = props.prefix;
  return (
      <div className={`${prefix}-header`}>
        <div className={`${prefix}-hs-class`}><span className="hs-icon icon-warlock"></span></div>
        <div className={`${prefix}-about`}>
          <div className={`${prefix}-title`}>Yada yada legend 1</div>
          <div className={`${prefix}-author`}>created by (authorname)</div>
          <div className={`${prefix}-created`}>1 day ago</div>
        </div>
      </div>
  );
};

export default DeckSnippetHeader;