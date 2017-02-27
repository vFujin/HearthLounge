export const SELECT_EXPANSION = 'SELECT_EXPANSION';
export const SELECT_EXPANSION_DETAILS = 'SELECT_EXPANSION_DETAILS';

export function selectExpansion(event){
  return {
      type: SELECT_EXPANSION,
      expansion: {
          preSelected: "displayNone",
          isSelected: "displayBlock",
          selectedExpansion: event.currentTarget.dataset['api'],
          selectedExpansionUrl: event.currentTarget.dataset['url'],
          selectedExpansionClass: event.currentTarget.dataset['expansion'],
          activeTab: this.sidebarActiveTab === this.selectedExpansionUrl
      }
  }
}

export function selectExpansionDetails(expansion_details){
  return {
    type: SELECT_EXPANSION_DETAILS,
    expansion_details
  }
}