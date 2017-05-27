import React from 'react';
import PropTypes from 'prop-types';
import {Comment} from '../../../view/comment';
import Loader from '../../../../../../../utils/loader';
import {convertBBCode} from '../../../../../../shared-assets/editor/text-editor-functions';

const SectionBody = ({comments, deckComment, uid, previewIsActive, handleCommentClick, handleCommentVotingClick}) => {

  const listComments = () =>{
    if(comments.length < 1){
      return <Loader/>
    }
    else{
      return comments[0].map((comment, i)=> <Comment key={i}
                                                     comment={comment}
                                                     uid={uid}
                                                     handleCommentClick={handleCommentClick}
                                                     handleCommentVotingClick={handleCommentVotingClick}/>
      )
    }
  };

  return (
      <div className="section__body">
        <div className={previewIsActive ? "display-none" : "comments"}>
          {listComments()}
        </div>
        <div className={!previewIsActive ? "display-none" : "comment-preview"}>
          {convertBBCode(deckComment)}
        </div>
      </div>
  )
};

export default SectionBody;