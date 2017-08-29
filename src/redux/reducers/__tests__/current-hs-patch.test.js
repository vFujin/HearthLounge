import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/current-hs-patch';
import * as types from '../../types/current-hs-patch';
import nock from 'nock';
import {MashapeKey} from "../../../keys";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async patch actions', ()=>{
  afterEach(() =>{
    nock.cleanAll();
  });

  test('creates FETCH_PATCH_SUCCESS when fetching patch has been done', () =>{
    nock('https://omgvamp-hearthstone-v1.p.mashape.com', {
      headers: {
        'X-Mashape-Key': MashapeKey
      }
    })
      .get('/info')
      .reply(200, {body: {patch: '9.0'}});

    const expectedActions = [
      {type: types.FETCH_PATCH_REQUEST},
      {type: types.FETCH_PATCH_SUCCESS, body: {patch: '9.0'}}
    ];

    const store = mockStore({patch: null});

    return store.dispatch(actions.fetchPatch()).then(()=>{
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
});