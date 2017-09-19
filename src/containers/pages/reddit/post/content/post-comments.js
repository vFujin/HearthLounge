import React from 'react';
import PropTypes from 'prop-types';
import TreeView from 'react-treeview';
import Loader from '../../../../../components/loader';
import CommentHeader from '../comment/header';
import CommentBody from '../comment/body';

const PostComments = ({cards, collapsedComments, handleCollapseClick, post, comments}) =>{
  const isOfficialDev = (comment) => {
    const {author_flair_css_class} = comment;
    return author_flair_css_class === "blizzard" ? "blizzard" : ''
  };

  const collapsed = i =>{
    return comments ? collapsedComments[i] : false;
  };

  const renderComment = (comment, i) => {
    if (comment && comment.body) {
      return (
          <TreeView
              key={comment.id}
              nodeLabel={<CommentHeader comment={comment}
                                        onClick={()=>handleCollapseClick(i)}
                                        isOfficialDev={isOfficialDev(comment)}/>}
              treeViewClassName={isOfficialDev(comment)}
              collapsed={collapsed(i)}>
            <div className="comment">
              <div className="details">
                <CommentBody comment={comment}
                             cards={cards}
                             comments={comments}
                             isOfficialDev={isOfficialDev(comment)}
                             renderComment={renderComment}/>
              </div>
            </div>
          </TreeView>
      )
    }
  };

  return (
      <div className="container__details--section container__details--comments">
        <div className="section__header">
          <div className="line"></div>
          <h1>{post.num_comments} {post.num_comments === 1 ? "comment" : "comments"}</h1>
        </div>
        <div className="section__body">
          <div className="comments">
            {comments.loading ? <Loader /> : comments.all.map((comment, i) => renderComment(comment, i))}
          </div>
        </div>
      </div>
  )
};

export default PostComments;

PostComments.propTypes = {
  cards: PropTypes.shape({
    allCards: PropTypes.array
  }),
  collapsedComments: PropTypes.array,
  handleCollapseClick: PropTypes.func,
  posts: PropTypes.array,
  postComments: PropTypes.array,
  params: PropTypes.shape({
    id: PropTypes.string
  })
};