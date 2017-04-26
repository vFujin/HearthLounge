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
        icon: 'link'
      },
      {
        title: 'copy deck to clipboard',
        icon: 'copy'
      },
      {
        title: 'save deck',
        icon: 'download'
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