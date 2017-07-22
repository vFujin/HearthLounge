import max from 'lodash/max';
import {amountByCost} from './index';

export default function (deck){
  const cardsCostAmount = Object.values(amountByCost(deck));

  return max(cardsCostAmount);
}