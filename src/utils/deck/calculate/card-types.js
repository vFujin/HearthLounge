import countBy from "lodash/countBy";

export default function (deck){
  return countBy(deck, 'type');
}