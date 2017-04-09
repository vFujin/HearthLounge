import {icon_filters} from './filters';
import _ from 'lodash';
export const dashboard_data = {
  region: ["Americas", "Asia", "Europe"],
  classes: _.map(icon_filters.playerClass, 'name')
};