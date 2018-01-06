export const navItems = [
  {
    name: "home",
    icon: "hs-logo",
    homepage_block_width: 0
  },
  {
    name: "decks",
    icon: "deck",
    homepage_block_width: 3
  },
  {
    name: "cards",
    icon: "all-cards",
    homepage_block_width: 1
  },
  {
    name: "expansions",
    icon: "expansions",
    homepage_block_width: 2,
    submenu: [
      {
        name: "Goblins vs Gnomes",
        url: "goblins-vs-gnomes"
      },
      {
        name: "The Grand Tournament",
        url: "the-grand-tournament"
      },
      {
        name: "Whispers of the Old Gods",
        url: "whispers-of-the-old-gods"
      },
      {
        name: "Mean Streets of Gadgetzan",
        url: "mean-streets-of-gadgetzan"
      },
      {
        name: "Journey to Un'Goro",
        url: "journey-to-ungoro"
      },
      {
        name: "Knights of the Frozen Throne",
        url: "knights-of-the-frozen-throne"
      },
      {
        name: "Kobolds & Catacombs",
        url: "kobolds-catacombs"
      }
    ]
  },
  {
    name: "adventures",
    icon: "adventures",
    homepage_block_width: 0,
    submenu: [
      {
        name: "Curse of Naxxramas",
        url: "naxxramas"
      },
      {
        name: "Blackrock Mountain",
        url: "blackrock-mountain"
      },
      {
        name: "The League of Explorers",
        url: "the-league-of-explorers"
      },
      {
        name: "One Night in Karazhan",
        url: "karazhan",
      }
    ]
  },
  {
    name: "create-deck",
    icon: "create-deck",
    homepage_block_width: 1
  },
  {
    name: "tournaments",
    icon: "trophy",
    homepage_block_width: 1
  },
  // {
  //   name: "Streamers",
  //   url: 'twitch',
  //   icon: "icon-twitch",
  //   homepage_block_width: 2
  // },
  {
    name: "reddit",
    icon: "reddit",
    homepage_block_width: 2
  }
];