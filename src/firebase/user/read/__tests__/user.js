import {users} from "../../../data-for-tests/index";
import {getUser} from "../index";
import {entityExists} from "../../utils/read/entity-exists";
import {callbackHelper} from "../../../../utils/test-helpers";

describe('#readsUserData', () =>{
  const {test_user_1, test_user_2} = users;

  const testUserExistance = (uid, expectedData) => {
    test(`confirms ${uid} user existance in firebase`, done => {
      entityExists('users', uid, data => callbackHelper(data, expectedData, done));
    })
  };

  const testUserData = (uid, expectedData) => {
    test(`returns ${uid} user data from firebase`, done =>{
      getUser(uid, data => callbackHelper(data, expectedData, done))
    })
  };

  testUserExistance('random-uid', false);
  testUserExistance(test_user_1.uid, true);
  testUserExistance(test_user_2.uid, true);

  testUserData(test_user_1.uid, test_user_1);
  testUserData(test_user_2.uid, test_user_2);
});