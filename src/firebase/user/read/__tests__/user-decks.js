import {users, simplified_users, user_decks} from "../../../data-for-tests/index";
import {getSimplifiedUser} from "../index";
import {callbackHelper} from "../../../../utils/test-helpers";
import {entityExists} from "../../utils/read/entity-exists";

describe('#readsUserDecksData', ()=>{
  const {test_user_1, test_user_2} = users;
  const {test_simplified_user_1, test_simplified_user_2} = simplified_users;


  // const testDecksExistance = (deckId, expectedData) => {
  //   test(`confirms ${deckId} deck existance in firebase`, done => {
  //     entityExists('decks', deckId, data => callbackHelper(data, expectedData, done));
  //   })
  // };

  const testUserExistance = (uid, expectedData) => {
    test(`confirms ${uid} user existance in firebase`, done => {
      entityExists('users', uid, data => callbackHelper(data, expectedData, done));
    })
  };

  const testUserDecks = (uid, expectedData) =>{
    test(`returns ${uid} user decks`, done => {
      getSimplifiedUser(uid, data=>callbackHelper(data, expectedData, done))
    })
  };

  testUserExistance(test_user_1.uid, true);
  testUserExistance(test_user_2.uid, true);
  testUserDecks(test_user_1.uid, test_simplified_user_1);
  testUserDecks(test_user_2.uid, test_simplified_user_2);
});