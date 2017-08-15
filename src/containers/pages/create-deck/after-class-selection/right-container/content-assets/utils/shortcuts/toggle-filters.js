
export default function(e, toggleFilters, filters){
  if(e.altKey && e.keyCode === 70) {
    e.preventDefault();
    toggleFilters(!filters)
  }
}