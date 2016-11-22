export const navItems = [
  {
    name: "Start",
    className: "home",
    icon: "icon-hs_logo",
    url: 'strona-glowna',
    homepage_order: null,
    homepage_block_width: 0
  },
  {
    name: "Talie kart",
    className: "decks",
    icon: "icon-deck",
    url: 'talie-kart',
    homepage_order: 1,
    homepage_block_width: 3,
    submenu: [
      {
        icon: "",
        hs_class: "Czarnoksiężnik",
        hs_class_url: "czarnoksieznik",
        hs_className: "warlock"
      },
      {
        icon: "",
        hs_class: "Druid",
        hs_class_url: "druid",
        hs_className: "druid"
      },
      {
        icon: "",
        hs_class: "Kapłan",
        hs_class_url: "kaplan",
        hs_className: "priest"
      },
      {
        icon: "",
        hs_class: "Łotr",
        hs_class_url: "lotr",
        hs_className: "rogue"
      },
      {
        icon: "",
        hs_class: "Łowca",
        hs_class_url: "lowca",
        hs_className: "hunter"
      },
      {
        icon: "",
        hs_class: "Mag",
        hs_class_url: "mag",
        hs_className: "mage"
      },
      {
        icon: "",
        hs_class: "Paladyn",
        hs_class_url: "paladyn",
        hs_className: "paladin"
      },
      {
        icon: "",
        hs_class: "Szaman",
        hs_class_url: "szaman",
        hs_className: "shaman"
      },
      {
        icon: "",
        hs_class: "Wojownik",
        hs_class_url: "wojownik",
        hs_className: "warrior"
      }
    ]
  },
  {
    name: "Karty",
    className: "cards",
    icon: "icon-card",
    url: 'karty',
    homepage_order: 10,
    homepage_block_width: 1
  },
  {
    name: "Arena Picker",
    className: "arena-picker",
    icon: "icon-arena-picker",
    url: 'arena-picker',
    homepage_order: 2,
    homepage_block_width: 1
  },
  {
    name: "Dodatki",
    className: "expansions",
    icon: "icon-expansions",
    url: 'dodatki',
    homepage_order: 3,
    homepage_block_width: 2,
    submenu:[

    ]
  },
  {
    name: "Stwórz talię",
    className: "create-deck",
    icon: "icon-create-deck",
    url: 'stworz-talie-kart',
    homepage_order: 4,
    homepage_block_width: 1
  },
  {
    name: "Forum",
    className: "forum",
    icon: "icon-forum",
    url: 'forum',
    homepage_order: 5,
    homepage_block_width: 1
  },
  {
    name: "Turnieje",
    className: "tournaments",
    icon: "icon-trophy",
    url: 'turnieje',
    homepage_order: 6,
    homepage_block_width: 1
  },
  {
    name: "Streamerzy",
    className: "streams",
    icon: "icon-twitch",
    url: 'streamerzy',
    homepage_order: 7,
    homepage_block_width: 2
  },
  {
    name: "Logowanie",
    className: "login",
    icon: "icon-login",
    url: 'logowanie',
    homepage_order: null,
    homepage_block_width: 0
  }
];