import {deckSimplification} from "../../../../../../../utils/deck/index";

/**
 * Handles deck creation topbar options selection
 *
 * @param event
 * @param {bool} editingTool
 * @param {object[]} deck
 * @param {string} icon
 * @param {bool} imgReadyDecklist
 * @param {function} handleCopyDeckStringClick
 * @param {function} switchDecklistClasses
 * @param {function} showDeckEditingTool
 * @param {function} simplifyDeck
 * @return {*}
 */
export default function(event, editingTool, deck, icon, imgReadyDecklist, handleCopyDeckStringClick, switchDecklistClasses, showDeckEditingTool, simplifyDeck){
  const simplifiedDeck = deckSimplification(deck);

  switch (icon) {
    case 'copy': return handleCopyDeckStringClick();
    case 'image': return switchDecklistClasses(!imgReadyDecklist);
    case 'download':
      !editingTool
          ? document.getElementById(event.currentTarget.id).className += "active"
          : document.getElementById(event.currentTarget.id).className = "";
      showDeckEditingTool(!editingTool);
      simplifyDeck(simplifiedDeck);
      break;
    case 'fire':
    default: return icon;
  }
};