import {resetFocus} from "../reset-focus";

export default function(e, toggleSearchbox, searchbox){
  if(e.altKey && e.keyCode === 78) {
    e.preventDefault();
    toggleSearchbox(!searchbox);
    resetFocus();
  }
}