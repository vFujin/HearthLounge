export default function(e, showDeckEditingTool, editingTool){
  if(e.button === 0 ||e.altKey && (e.keyCode === 83)){
    e.preventDefault();
    showDeckEditingTool(!editingTool)
    //need to add deck simplification obj here
  }
}