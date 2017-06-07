export function getElementSnapshotOnce(selector, callback){
  return selector.once("value", snapshot=>callback(snapshot));
}

export function subscribeToElementSnapshot(selector, callback){
  return selector.on("value", snapshot=>callback(snapshot));
}