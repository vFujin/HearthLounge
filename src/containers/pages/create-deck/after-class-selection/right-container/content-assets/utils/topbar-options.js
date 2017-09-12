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
      switchDecklistClasses();
      importedDeckstringPopover && toggleImportedDeckstringPopover();
      break;
    }
    case 'download':
      !editingTool
          ? document.getElementById(event.currentTarget.id).className += "active"
          : document.getElementById(event.currentTarget.id).className = "";
      showDeckEditingTool();
      simplifyDeck(simplifiedDeck);
      break;
    case 'fire': {
      toggleImportedDeckstringPopover();
      imgReadyDecklist && switchDecklistClasses();
      break;
    }
    default: return icon;
  }
};