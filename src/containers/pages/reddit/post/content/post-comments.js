import React from 'react';
import PropTypes from 'prop-types';
import TreeView from 'react-treeview';
import Loader from '../../../../../utils/loader';
import CommentHeader from '../comment/header';
import CommentBody from '../comment/body';

const PostComments = ({cards, collapsedComments, handleCollapseClick, params, posts, postComments}) =>{

  const isOfficialDev = (comment) => {
    const {author_flair_css_class} = comment;
    return author_flair_css_class === "blizzard" ? "blizzard" : ''
  };

  const collapsed = i =>{
    return postComments ? collapsedComments[i] : false;
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
                             cards={cards.allCards}
                             comments={postComments}
                             isOfficialDev={isOfficialDev(comment)}
                             renderComment={renderComment}/>
              </div>
            </div>
          </TreeView>
      )
    }
  };

  const isPlural = () =>{
    let amountOfComments = posts.filter(post=>post.id === params.id).map(post=>post.num_comments)[0];
    if(amountOfComments === 1){
      return `${amountOfComments} comment`;
    }
    return `${amountOfComments} comments`;
  };

  return (
      <div className="container__details--section container__details--comments">
        <div className="section__header">
          <div className="line"></div>
          {/*TODO: add if-else for 1 comment / multiple comments */}
          <h1>{isPlural()}</h1>
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