import {getUser} from "../index";
import {entityExists} from "../../utils/read/entity-exists";
import {callbackHelper} from "../../../../utils/test-helpers";

describe('#readsUserData', () =>{
  let test_user_1 = {
    avatar:"https://firebasestorage.googleapis.com/v0/b/hearthlounge-32197.appspot.com/o/Jke3sVY5QYYgTlLUrVPv2NPyhY72%2Favatar%2Flotus.png?alt=media&token=c2da8179-e858-4696-98d6-6b70345a72b9",
    email: "b@b.com",
    rank: 1,
    role: "user",
    uid: "Jke3sVY5QYYgTlLUrVPv2NPyhY72",
    updatedProfile: true,
    username: "Dan"
  };

  const test_user_2 = {
    email: "d@d.com",
    rank: 1,
    role: "user",
    uid: "P7u1tuwucrYgDz59HKgOTiznudJ3" ,
    updatedProfile: true,
    username: "Jon"
  };

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