import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import SimplifiedUserSnippet from '../../../../../../components/user/simplified-user-snippet';
import ShortenedUserDetailsLoader from "../../../../../../components/loaders/shortened-user-details-loader";
import {CommentHeader, CommentBody, CommentFooter} from "./comment-assets/comment/index";
import {FETCH_SHORTENED_USER_DETAILS_REQUEST} from "../../../../../../redux/user/shortened-details/types";

class Comment extends PureComponent {
  componentDidMount(){
    const {authorId} = this.props.comment;
    this.props.fetchShortenedUserDetails(authorId);
  }

  render() {
    const {authenticated, activeUserId, comment, commentVotes, shortenedUserDetails, deckCommentDeletingStatus} = this.props;
    const {authorId, text, commentId, votes, voteType} = comment;
    let user = Object.entries(shortenedUserDetails).filter(o => o[0] === authorId);
    let deletingStatus = deckCommentDeletingStatus.loading && (commentId === this.props.clickedCommentId);

    return (
        <div className={`comment ${deletingStatus && "deleting"}`}>
          {shortenedUserDetails[authorId] ? <SimplifiedUserSnippet user={user[0][1]} /> : <ShortenedUserDetailsLoader />}
          <div className="details">
            <CommentHeader comment={comment}
                           authenticated={authenticated}
                           activeUserId={activeUserId}
                           handleCommentOptionsClick={this.props.handleCommentOptionsClick}/>
            <CommentBody commentText={text}/>
            <CommentFooter commentId={commentId}
                           authenticated={authenticated}
                           voteType={voteType}
                           commentVotes={commentVotes}
                           votes={votes}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  const {shortenedUserDetails, deckCommentDeletingStatus} = state.deckView;
  return {shortenedUserDetails, deckCommentDeletingStatus};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShortenedUserDetails: payload => dispatch({type: FETCH_SHORTENED_USER_DETAILS_REQUEST, payload}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment)