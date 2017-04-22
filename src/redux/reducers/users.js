import {ref} from '../../keys';
import _ from 'lodash';

export default function (){
  return ref.once("value").then(snapshot=>_.map(Object.values(snapshot.child('users').val()), 'email'));
}