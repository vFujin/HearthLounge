import {call, put} from 'redux-saga/effects';
import {deleteDeckCommentSaga, deleteDeckComment} from "../saga";
import {updateDeckCommentsCount} from '../../utils';
import {error} from "../../../../../utils/messages";
import * as actions from "../actions";
import {createDocument} from "../../../../../utils/test-helpers";


beforeEach(()=> {
  createDocument();
});

//XHR errors are because of successful batch to firebase, while the passed commentId doesn't exist there
describe('comments', () =>{
  describe('#deleteComment', () => {
    const payload = {payload: {}};

    describe('when success', () => {
      test('should dispatch success action', () => {
        const saga = deleteDeckCommentSaga({payload}),
          response = {payload: {commentId: 'fakeId123'}};

        expect(saga.next().value).toEqual(call(deleteDeckComment, payload));
        expect(saga.next(response).value).toEqual(put(actions.deleteDeckCommentSuccess(response.commentId)))
      });

      test('should dispatch updateDeckCommentsCount action', () => {
        const saga = deleteDeckCommentSaga({payload}),
          response = {payload: {commentId: 'fakeId123', deckId: 'fakeId321'}};

        expect(saga.next().value).toEqual(call(deleteDeckComment, payload));
        expect(saga.next(response).value).toEqual(put(actions.deleteDeckCommentSuccess(response.commentId)));
        expect(saga.next().value).toEqual(updateDeckCommentsCount(response.deckId, 'decrement'));
      })
    });


    describe('when error', () => {
      test('should dispatch an error action', () => {
        const saga = deleteDeckCommentSaga({payload}),
          response = {err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(deleteDeckComment, payload));
        expect(saga.next(response).value).toEqual(put(actions.deleteDeckCommentFailure(response.err)))
      });

      test('should show error toast', () => {
        const saga = deleteDeckCommentSaga({payload}),
          response = {err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(deleteDeckComment, payload));
        expect(saga.next(response).value).toEqual(put(actions.deleteDeckCommentFailure(response.err)));
        expect(saga.next().value).toEqual(error('fake error msg'));
      });
    });
  });
});