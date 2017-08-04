import max from 'lodash/max';
import values from 'lodash/values';
import {amountByCost} from './index';

export default function (deck){
  const cardsCostAmount = values(amountByCost(deck));

  return max(cardsCostAmount);
}