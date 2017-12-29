import {captureDecklist} from "../../../../../../../utils/capture-decklist";

/**
 * Handles user deck capturing selection
 *
 * @param event
 * @param switchDecklistClasses
 * @param {string} parentId
 * @return {*}
 */
export default function(event, switchDecklistClasses, parentId){
  let target = event.currentTarget.id;

  switch(target){
    case 'save-img':
      captureDecklist('decklist-to-img', switchDecklistClasses, parentId);
      break;
    case 'cancel-img-save': {
      switchDecklistClasses(false);
      document.getElementById(parentId).className = "";
      break;
    }
    default: return target;
  }
};