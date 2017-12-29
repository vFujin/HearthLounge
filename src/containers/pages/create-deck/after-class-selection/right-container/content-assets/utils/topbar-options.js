import {deckSimplification} from "../../../../../../../utils/deck/edit-mode";

/**
 * Handles deck creation topbar options selection
 *
 * @param e - event
 * @param {string} icon
 * @param {object} props
 * @param {function} handleCopyDeckStringClick
 * @param {function} switchDecklistClasses
 * @param {function} toggleActiveClass
 * @return {*}
 */
export default function (e, icon, props, handleCopyDeckStringClick, switchDecklistClasses, toggleActiveClass){
  const {simplifyDeck, showDeckEditingTool, toggleImportedDeckstringPopover, deckCreation} = props;
  const {editingTool, deck, imgReadyDecklist, importedDeckstringPopover} = deckCreation;

  switch (icon) {
    case 'copy': return handleCopyDeckStringClick();
    case 'image': {
      switchDecklistClasses(!imgReadyDecklist);
      toggleActiveClass(e, !imgReadyDecklist, "import");
      toggleImportedDeckstringPopover(false);
      break;
    }
    case 'save': {
      const simplifiedDeck = deckSimplification(deck);
      toggleActiveClass(e, editingTool);
      showDeckEditingTool(!editingTool);
      simplifyDeck(simplifiedDeck);
      break;
    }
    case 'import': {
      toggleActiveClass(e, !importedDeckstringPopover, "image");
      switchDecklistClasses(false);
      toggleImportedDeckstringPopover(!importedDeckstringPopover);
      break;
    }
    default: return icon;
  }
};