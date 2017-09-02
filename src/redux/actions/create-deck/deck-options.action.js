import {UPDATE_DECK_PROPERTY} from '../../types/create-deck/deck-options';

export function updateDeckProperty(props){
  return {
    type: UPDATE_DECK_PROPERTY,
    props
  }
}