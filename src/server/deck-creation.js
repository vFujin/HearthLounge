import {ref} from '../keys';
import _ from 'lodash';

export function saveDeck(uid, deck){
  return ref.child(`users/${uid}`).update({
    deck: _.concat(deck)
  });
}