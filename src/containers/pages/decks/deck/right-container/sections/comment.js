import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import SimplifiedUserSnippet from '../../../../../../components/user/simplified-user-snippet';
import ShortenedUserDetailsLoader from "../../../../../../components/loaders/shortened-user-details-loader";
import {CommentHeader, CommentBody, CommentFooter} from "./comment-assets/comment/index";
import {FETCH_SHORTENED_USER_DETAILS_REQUEST} from "../../../../../../redux/user/shortened-details/types";

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
    const {authenticated, comment, deckId, commentVotes, votedComments, usersDetails, handleCommentVotingClick, shortenedUserDetails} = this.props;
    const {authorId, created, patch, text, commentId, votes, voteType} = comment;
    let user = Object.entries(shortenedUserDetails).filter(o => o[0] === authorId);

    // console.log(shortenedUserDetails);
    // const {rank, role, avatar, username} = user[1];

    return (
        <div className="comment">
          {shortenedUserDetails[authorId] ? <SimplifiedUserSnippet user={user[0][1]} /> : <ShortenedUserDetailsLoader />}
          <div className="details">
            <CommentHeader created={created}
                           authenticated={authenticated}
                           patch={patch}/>
            <CommentBody commentText={text}/>
            <CommentFooter commentId={commentId}
                           authenticated={authenticated}
                           voteType={voteType}
                           handleCommentVotingClick={handleCommentVotingClick}
                           commentVotes={commentVotes}
                           votes={votes}/>
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