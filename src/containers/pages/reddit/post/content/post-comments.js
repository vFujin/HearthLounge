import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../../../utils/loader';
import CommentHeader from '../comment/header';
import CommentBody from '../comment/body';
import TreeView from 'react-treeview';

const PostComments = ({cards, collapsedComments, params, posts, postComments, toggleCollapse}) =>{

  const isOfficialDev = (comment) =>{
    const {author_flair_css_class} = comment;
    return author_flair_css_class === "blizzard" ? "blizzard" : ''
  };

  // something is fucked up under that function
  const handleCollapseClick = (i) => {
    if(collapsedComments) {
      let [...collapsedComments] = collapsedComments;
      collapsedComments[i] = !collapsedComments[i];
      toggleCollapse(collapsedComments)
    }
  };

  const collapsed = i =>{
    return postComments ? collapsedComments[i] : false;
  };

  let renderComment = (comment, i) => {
    if (comment.body) {
      return (
          <TreeView
              key={comment.id}
              nodeLabel={<CommentHeader comment={comment}
                                        onClick={handleCollapseClick(i)}
                                        isOfficialDev={isOfficialDev(comment)}/>}
              treeViewClassName={isOfficialDev(comment)}
              collapsed={collapsed(i)}>
            <div className="comment">
              <div className="details">
                <CommentBody comment={comment}
                             cards={cards.allCards}
                             comments={postComments}
                             isOfficialDev={isOfficialDev(comment)}
                             renderComment={renderComment(comment, i)}/>
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
          {/*TODO: add if-else for 1 comment / multiple comments */}
          <h1>{posts.filter(post=>post.id === params.id).map(post=>post.num_comments)[0]} comments</h1>
        </div>
        <div className="section__body">
          <div className="comments">
            {postComments ? postComments.map((comment, i) => renderComment(comment, i)) : <Loader />}
          </div>
        </div>
      </div>
  )
};

export default PostComments;

PostComments.propTypes = {
  posts: PropTypes.array,
  params: PropTypes.shape({
    id: PropTypes.string
  })
};
