import {users, simplified_users} from "../../../data-for-tests/index";
import {getSimplifiedUser} from "../index";
import {callbackHelper} from "../../../../utils/test-helpers";

describe('#readsSimplifiedUserData', ()=>{
  const {test_user_1, test_user_2} = users;
  const {test_simplified_user_1, test_simplified_user_2} = simplified_users;

  const testSimplifiedUserData = (uid, expectedData) =>{
    test(`returns simplified ${uid} user data`, done => {
      getSimplifiedUser(uid, data=>callbackHelper(data, expectedData, done))
    })
  };

  testSimplifiedUserData(test_user_1.uid, test_simplified_user_1);
  testSimplifiedUserData(test_user_2.uid, test_simplified_user_2);
});