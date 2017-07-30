export default function(e, toggleFilters, filters){
  e.preventDefault();

  if(e.button === 0 || (e.altKey && e.keyCode === 70)) {
    toggleFilters(!filters)
  }
}