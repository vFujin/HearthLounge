import {firebaseAuth} from "../keys";

export const activeUser = () => {
  return firebaseAuth().currentUser;
};