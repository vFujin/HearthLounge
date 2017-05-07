import domtoimage from 'dom-to-image';
import {error, success} from './messages';

export const captureDecklist = (selector, decklistState, closeLoadingMessage) =>{
  let deckList = document.getElementById(selector);

  return domtoimage.toJpeg(deckList, {bgcolor: '#E7E2DA'})
      .then(dataUrl=>{
        let link = document.createElement('a');
        link.download = 'deck.jpeg';
        link.href = dataUrl;
        link.click();
        decklistState();
        closeLoadingMessage();
        success('Image saved!')
      })
      .catch(err=>{
        closeLoadingMessage();
        error("Couldn't save image. Try again later. " + err);
      });
};