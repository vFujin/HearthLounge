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
        title: 'Copy deck URL to clipboard',
        icon: 'link',
        popover: false,
        allowCopy: true
      },
      {
        title: 'save deck as image',
        icon: 'image',
        popover: true,
        allowCopy: false
      },
      {
        title: 'save deck in hearth lounge',
        icon: 'download',
        popover: false,
        allowCopy: false
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