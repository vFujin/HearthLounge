export default function(e, toggleDeckMechanics, deckMechanics){
  e.preventDefault();
  if(e.altKey && (e.keyCode === 77)){
    toggleDeckMechanics(!deckMechanics)
  }
}