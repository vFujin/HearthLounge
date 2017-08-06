import {refParent} from "../../../../keys";

export function entityExists(entity, id, callback){
  return refParent(entity).once("value", snapshot => callback(snapshot.child(id).exists()));
}