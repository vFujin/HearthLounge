import domtoimage from 'dom-to-image';
import {error, success} from './messages';

export const captureDecklist = (selector, decklistState, parentId) =>{
  let deckList = document.getElementById(selector);

  return domtoimage.toJpeg(deckList, {bgcolor: '#E7E2DA'})
      .then(dataUrl=>{
        let link = document.createElement('a');
        link.download = 'deck.jpeg';
        link.href = dataUrl;
        link.click();
        decklistState(false);
        document.getElementById(parentId).className = "";
        success('Image saved!')
      })
      .catch(err=>{
        error("Couldn't save image. Try again later. " + err);
      });
};
