import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#deckToolsActions', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
        const expectedAction = {
          type: type,
          [key]: state
        };
        expect(action(state)).toEqual(expectedAction);
    })
  };

  testActions(actions.toggleDeckEditView, types.TOGGLE_DECK_EDIT_VIEW, 'payload', true);
  testActions(actions.updateCommentText, types.UPDATE_COMMENT_TEXT, 'payload', "foo");
  testActions(actions.toggleCommentBox, types.TOGGLE_COMMENT_BOX, 'payload', true);
  testActions(actions.togglePreview, types.TOGGLE_PREVIEW, 'payload', true);
});