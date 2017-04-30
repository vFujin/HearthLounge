export const topbar_icons = (active_class) => {
  return {
    cards: [
      {
        title: active_class,
        icon: active_class
      },
      {
        title: 'classic',
        icon: 'hs-logo'
      },
      {
        title: 'basic',
        icon: 'basic'
      },
      {
        title: "journey to un'goro",
        icon: 'journey-to-ungoro'
      }
    ],
    options: [
      {
        title: 'copy deck URL',
        icon: 'link',
        popover: false
      },
      {
        title: 'copy deck to clipboard',
        icon: 'copy',
        popover: true
      },
      {
        title: 'save deck',
        icon: 'download',
        popover: false
      },
    ],
    types: [
      {
        title: 'minion',
        icon: 'minions'
      },
      {
        title: 'spell',
        icon: 'fire'
      },
      {
        title: 'weapon',
        icon: 'warrior'
      }
    ]
  }
};