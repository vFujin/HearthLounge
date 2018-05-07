import React from 'react';
import Post from './content/post';
import Topbar from './topbar';
import PostComments from './content/post-comments/post-comments';

const ContentMobile = ({mobileActiveTab}) => {

  const mapContent = (mobileActiveTab) => {
    switch(mobileActiveTab){
      case "post-details": return <Topbar />;
      case "comments": return <PostComments/>;
      default: return <Post/>
    }
  };

  return (
    <div className="content">
      {mapContent(mobileActiveTab)}
    </div>
  );
};

export default ContentMobile;