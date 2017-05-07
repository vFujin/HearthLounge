import {success, error} from './messages';

export const copyDeckUrlToClipboard = (summarizedDeck, reducer) =>{
  const successMsg = 'Successfully copied deck URL into clipboard!';
  const errorMsg = "Couldn't copy deck URL to clipboard. Deck must have at least 1 card.";

  if(summarizedDeck.length > 0) {
    const count = summarizedDeck => summarizedDeck.reduce((a, b) => Object.assign(a, {[b]: (a[b] || 0) + 1}), {});
    let urlEndObj = count(summarizedDeck),
        urlEnd = Object.keys(urlEndObj).map(k => `${k}:${urlEndObj[k]}`).join(',');
    reducer(urlEnd);
    success(successMsg);
  }
  else{
    error(errorMsg, 3000);
  }
};