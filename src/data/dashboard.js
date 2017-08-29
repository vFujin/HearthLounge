// might come handy in the future
// if you are only going to export one variable
// prefer default

// export default {
//  region: ['America', 'Asia', 'Europe'],
//  classes: icon_filters.playerClass.map((e) => e.name)
// }

// also refrain from using libraries for 1 liner code :)

import {icon_filters} from './filters';
import _ from 'lodash';
export const dashboard_data = {
  region: ["Americas", "Asia", "Europe"],
  classes: _.map(icon_filters.playerClass, 'name')
};
