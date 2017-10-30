import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {timeDifference} from '../../../../../../utils/unix-to-date';
import MoreOptions from '../../../../../shared-assets/posts/more-options';
import SimplifiedUserSnippet from '../../../../../../components/user/simplified-user-snippet';
import Tooltip from 'antd/lib/tooltip';
import {FETCH_SHORTENED_USER_DETAILS_REQUEST} from "../../../../../../redux/user/shortened-details/types";
import Icon from "../../../../../../components/icon";
import ShortenedUserDetailsLoader from "../../../../../../components/loaders/shortened-user-details-loader";

class Comment extends PureComponent {
  // ;
  // let user = {};
  // Object.entries(usersDetails).filter(o => o[0] === authorId).map(o =>user = o[1]);
  // const {rank, avatar, role, username} = user;
  //
  // let commented = timeDifference(created, false);
  // let detailedDate = timeDifference(created, true);
  // console.log(Object.values(votedComments)[0][id])

  componentDidMount(){
    const {authorId} = this.props.comment;
    this.props.fetchShortenedUserDetails(authorId);
  }

  render() {
    const {comment, deckId, commentVotes, votedComments, usersDetails, handleCommentVotingClick, shortenedUserDetails} = this.props;
    const {authorId, created, patch, text, commentId, votes, voteType} = comment;
    let user = Object.entries(shortenedUserDetails).filter(o => o[0] === authorId);

    // console.log(shortenedUserDetails);
    // const {rank, role, avatar, username} = user[1];
    const commented = timeDifference(created, false);
    const detailedDate = timeDifference(created, true);
    return (
        <div className="comment">
          {shortenedUserDetails[authorId] ? <SimplifiedUserSnippet user={user[0][1]} /> : <ShortenedUserDetailsLoader />}
          <div className="details">
            <div className="header">
              <Tooltip title={detailedDate} placement="right">
                <div className="commented">{commented}</div>
              </Tooltip>
              <div className="header-right">
                <div className="patch">{patch}</div>
                <MoreOptions/>
              </div>
            </div>
            <div className="body">
              {text}
            </div>
            <div className="footer">
              <div data-commentid={commentId}
                   onClick={handleCommentVotingClick}
                   id="upvote"
                   className={`up peripheral ${(voteType && voteType === "upvote") ? 'voted' : ''}`}>
                <Icon name="circle-up"/>
              </div>
              <div className="votes peripheral">{(commentVotes && commentVotes.id === commentId) ? commentVotes.votes : votes}</div>
              <div data-commentid={commentId}
                   onClick={handleCommentVotingClick}
                   id="downvote"
                   className={`down peripheral ${(voteType && voteType === "downvote") ? 'voted' : ''}`}>
                <Icon name="circle-down"/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  const {shortenedUserDetails} = state.deckView;
  return {shortenedUserDetails};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShortenedUserDetails: payload => dispatch({type: FETCH_SHORTENED_USER_DETAILS_REQUEST, payload}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment)