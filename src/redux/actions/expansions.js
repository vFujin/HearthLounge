export const SELECT_EXPANSION = 'SELECT_EXPANSION';
export const SELECT_EXPANSION_DETAILS = 'SELECT_EXPANSION_DETAILS';

export function selectExpansion(event, props){
  console.log(props);
  return {
    type: SELECT_EXPANSION,
    expansion: {
      preSelected: props.preSelected === "displayBlock" ? "displayNone" : "displayNone",
      isSelected: props.selected === "displayNone" ? "displayBlock" : "displayBlock",
      selectedExpansion: event.target.dataset['api'],
      selectedExpansionUrl: event.target.dataset['url'],
      selectedExpansionClass: event.target.dataset['expansion'],
      activeTab: props.sidebarActiveTab === '' ? this.selectedExpansionUrl : this.selectedExpansionUrl
    }
  }
}

export function selectExpansionDetails(expansion_details){
  return {
    type: SELECT_EXPANSION_DETAILS,
    expansion_details
  }
}