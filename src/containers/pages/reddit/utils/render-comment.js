import React from 'react';
import TreeView from 'react-treeview';
import CommentHeader from "../post/content/comment/header";
import CommentBody from "../post/content/comment/body";

export const isOfficialDev = (author_flair_css_class) => {
  return author_flair_css_class === "blizzard" ? "blizzard" : ''
};

export const renderComment = (comment, comments, i) => {
  if (comment && comment.body) {
    const {author_flair_css_class} = comment;
    return (
        <TreeView
            key={comment.id}
            nodeLabel={<CommentHeader comment={comment}
                                      isOfficialDev={isOfficialDev(comment)}/>}
            treeViewClassName={isOfficialDev(comment)}>
          <div className="comment">
            <div className="details">
              <CommentBody comment={comment}
                           comments={comments}
                           isOfficialDev={isOfficialDev(author_flair_css_class)}
                           renderComment={renderComment}/>
            </div>
          </div>
        </TreeView>
    )
  }
};