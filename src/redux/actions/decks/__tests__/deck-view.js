import * as actions from '../deck-view';
import * as types from '../../../types/decks/deck-view';
import lowerCase from 'lodash/lowerCase';

describe('#createDeckViewActions', () =>{

  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      const expectedAction = {
        type: type,
        [key]: state
      };

      expect(action(state)).toEqual(expectedAction);
    })
  };

  const testActionsWith2Params = (action, type, key, param1, param2) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      const expectedAction = {
        type: type,
        [key]: {
          [param1]: param2
        }
      };

      expect(action(param1, param2)).toEqual(expectedAction);
    })
  };

  testActions(actions.updateComment, types.UPDATE_COMMENT, 'props', {text: '123'});
  testActions(actions.updateCommentVote, types.UPDATE_COMMENT_VOTE, 'vote', 'upvote');
  testActions(actions.toggleCommentBox, types.TOGGLE_COMMENT_BOX, 'commentBoxIsActive', true);
  testActions(actions.togglePreview, types.TOGGLE_PREVIEW, 'previewIsActive', true);
  testActions(actions.updateCommentVotes, types.UPDATE_COMMENT_VOTES, 'commentVotes', []);
  testActions(actions.updateActiveCommentId, types.UPDATE_ACTIVE_COMMENT_ID, 'activeComment', {comId: 1});

  testActionsWith2Params(actions.updateComments, types.FETCH_COMMENTS, 'comments', 'deckId', []);
  testActionsWith2Params(actions.updateUserVotedDeckComments, types.FETCH_USER_VOTED_COMMENTS, 'votedComments', 'deckId', []);
});