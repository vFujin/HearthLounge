export function alertUnload(nextProps, editingDecklist, editingDeckDescription, currentDeck, updateDecklist, onUnload){
  const {deck, description} = currentDeck;
  let decksEqual = JSON.stringify(editingDecklist) ===  JSON.stringify(deck);
  let decksNotEqual = JSON.stringify(editingDecklist) !==  JSON.stringify(deck);
  let descriptionsEqual = editingDeckDescription && (editingDeckDescription === description);
  let descriptionsNotEqual = editingDeckDescription && (editingDeckDescription !== description);

  if(nextProps.deckEditing && (decksNotEqual || descriptionsNotEqual)){
    window.addEventListener("beforeunload", onUnload)
  }
  if(nextProps.deckEditing && (decksEqual && descriptionsEqual)){
    window.removeEventListener("beforeunload", onUnload)
  }
  if(!nextProps.deckEditing && (decksNotEqual || descriptionsNotEqual)){
    window.removeEventListener("beforeunload", onUnload);
    updateDecklist(deck)
    //add description reducer
  }
  if(!nextProps.deckEditing && (decksNotEqual || descriptionsNotEqual)){
    window.removeEventListener("beforeunload", onUnload);
    updateDecklist(deck)
    //add description reducer
  }
}