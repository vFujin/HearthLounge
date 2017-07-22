import replace from 'lodash/replace';

export const removeApostrophe = string =>{
  return replace(string.toLowerCase(), "'", "");
};