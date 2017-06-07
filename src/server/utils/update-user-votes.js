import {getElementSnapshotOnce} from './read-data';

export function updateUserVotes(selector, elementId, vote, callback) {
  return getElementSnapshotOnce(selector, snapshot => {
    if (snapshot.val() === null) {
      selector.set({
        [elementId]: vote
      });
      callback(vote);
    }

    else if (snapshot.val()[elementId] === vote) {
      if (snapshot.numChildren() < 2) {
        selector.remove();
      }
      else {
        selector.update({
          [elementId]: null
        });
      }
      callback("null");
    }
    else {
      selector.update({
        [elementId]: vote
      });
      callback(vote);
    }
  });
}