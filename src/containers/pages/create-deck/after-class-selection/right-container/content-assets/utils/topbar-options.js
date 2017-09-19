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
 * @param {bool} importedDeckstringPopover
 * @param {function} toggleImportedDeckstringPopover
 * @return {*}
 */
export default function(event, editingTool, deck, icon, imgReadyDecklist, handleCopyDeckStringClick, switchDecklistClasses, showDeckEditingTool, simplifyDeck, importedDeckstringPopover, toggleImportedDeckstringPopover){
  const simplifiedDeck = deckSimplification(deck);
  switch (icon) {
    case 'copy': return handleCopyDeckStringClick();
    case 'image': {
      switchDecklistClasses(!imgReadyDecklist);
      toggleImportedDeckstringPopover(false);
      break;
    }
    case 'save':
      !editingTool
          ? document.getElementById(event.currentTarget.id).className += "active"
          : document.getElementById(event.currentTarget.id).className = "";
      showDeckEditingTool(!editingTool);
      simplifyDeck(simplifiedDeck);
      break;
    case 'import': {
      toggleImportedDeckstringPopover(!importedDeckstringPopover);
      switchDecklistClasses(false);
      break;
    }
    default: return icon;
  }
};