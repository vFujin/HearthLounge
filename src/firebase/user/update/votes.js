export default function (selector, elementId, vote, callback) {
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

export function getElementSnapshotOnce(selector, callback){
  return selector.once("value", snapshot=>callback(snapshot));
}

export function subscribeToElementSnapshot(selector, callback){
  return selector.on("value", snapshot=>callback(snapshot));
}