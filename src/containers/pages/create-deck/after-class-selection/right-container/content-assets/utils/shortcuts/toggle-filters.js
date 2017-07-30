
export default function(e, toggleFilters, filters){
  if(e.button === 0 || (e.altKey && e.keyCode === 70)) {
    e.preventDefault();
    toggleFilters(!filters)
  }
}