import {call, put} from 'redux-saga/effects';
import {postDeckCommentSaga, postDeckComment} from "../saga";
import * as actions from "../actions";
import {updateDeckCommentsCount} from "../../utils";


//while the tests are passing, transaction is failing due to passing id's that does not exist in db
describe('post comment saga', () =>{
  describe('#postCommentSaga', () =>{
    const payload = {payload: {}};

    describe('when success', () =>{
      test('should dispatch success action', () =>{
        const saga = postDeckCommentSaga({payload}),
          response = {payload: {commentId: "fakeCommentI123", deckId: "fakeDeckId123"}};

        expect(saga.next().value).toEqual(call(postDeckComment, payload));
        expect(saga.next(response).value).toEqual(put(actions.postDeckCommentSuccess(Object.assign(payload, {commentId: response.payload.commentId}))))
      });

      test('should update deck comments count action', () =>{
        const saga = postDeckCommentSaga({payload}),
          response = {payload: {commentId: "fakeCommentI123", deckId: "fakeDeckId123"}};

        expect(saga.next().value).toEqual(call(postDeckComment, payload));
        expect(saga.next(response).value).toEqual(put(actions.postDeckCommentSuccess(Object.assign(payload, {commentId: response.payload.commentId}))));
        expect(saga.next().value).toEqual(updateDeckCommentsCount(response.deckId, "increment"));
      });
    });

    describe('when error', () =>{
      test('should dispatch an error action', () =>{
        const saga = postDeckCommentSaga({payload}),
          response = { err: {message: 'fake err'}};

        expect(saga.next().value).toEqual(call(postDeckComment, payload));
        expect(saga.next(response).value).toEqual(put(actions.postDeckCommentFailure(response.err)))
      });
    });
  })
});