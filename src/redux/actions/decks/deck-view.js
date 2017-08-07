import _ from 'lodash';
import {
  FETCH_COMMENTS,
  FETCH_USERS_DETAILS,
  FETCH_USER_VOTED_COMMENTS,
  TOGGLE_COMMENT_BOX,
  TOGGLE_PREVIEW,
  UPDATE_ACTIVE_COMMENT_ID,
  UPDATE_COMMENT,
  UPDATE_COMMENT_VOTE,
  UPDATE_COMMENT_VOTES
} from "../../types/decks/deck-view";

export function updateComment(props){
  return {
    type: UPDATE_COMMENT,
    props
  }
}

export function updateCommentVote(vote){
  return {
    type: UPDATE_COMMENT_VOTE,
    vote
  }
}

export function toggleCommentBox(commentBoxIsActive){
  return {
    type: TOGGLE_COMMENT_BOX,
    commentBoxIsActive
  }
}

export function togglePreview(previewIsActive){
  return {
    type: TOGGLE_PREVIEW,
    previewIsActive
  }
}

export function updateComments(deckId, comments){
  return {
    type: FETCH_COMMENTS,
    comments: {[deckId]: _.map(comments)}
  }
}

export function updateUsersDetails(usersDetails){
  return {
    type: FETCH_USERS_DETAILS,
    usersDetails
  }
}

export function updateUserVotedDeckComments(uid, deckId, votedComments){
  return {
    type: FETCH_USER_VOTED_COMMENTS,
    votedComments: {
      [deckId]: votedComments
    }
  }
}

export function updateCommentVotes(commentVotes){
  return {
    type: UPDATE_COMMENT_VOTES,
    commentVotes
  }
}

export function updateActiveCommentId(activeComment){
  return {
    type: UPDATE_ACTIVE_COMMENT_ID,
    activeComment
  }
}

