import {captureDecklist} from "../../../../../../../utils/capture-decklist";
import {loading} from "../../../../../../../utils/messages";

/**
 * Handles user deck capturing selection
 *
 * @param event
 * @param switchDecklistClasses
 * @return {*}
 */
export default function(event, switchDecklistClasses){
  let target = event.currentTarget.id;

  switch(target){
    case 'save-img':
      let closeLoadingMessage = loading('Creating image...');
      captureDecklist('decklist-to-img', switchDecklistClasses, closeLoadingMessage);
      break;
    case 'cancel-img-save': return switchDecklistClasses(false);
    default: return target;
  }
};