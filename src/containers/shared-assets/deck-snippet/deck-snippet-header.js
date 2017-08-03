import React from 'react';
export const DeckSnippetHeader = ({prefix, hsClass, username, title, created}) => {
  return (
      <div className={`${prefix}-header`}>
        <div className={`${prefix}-hs-class`}><span className={`hs-icon icon-${hsClass}`}></span></div>
        <div className={`${prefix}-about`}>
          <div className={`${prefix}-title`}>{title}</div>
          <div className={`${prefix}-author`}>{username}</div>
          <div className={`${prefix}-created`}>{created}</div>
        </div>
      </div>
  );
};

export default DeckSnippetHeader;