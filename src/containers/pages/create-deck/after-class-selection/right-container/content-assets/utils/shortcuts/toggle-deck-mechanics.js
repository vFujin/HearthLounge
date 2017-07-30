export default function(e, toggleDeckMechanics, deckMechanics){
  if(e.button === 0 ||e.altKey && (e.keyCode === 77)){
    e.preventDefault();
    toggleDeckMechanics(!deckMechanics)
  }
}