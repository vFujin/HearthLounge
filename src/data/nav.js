export const navItems = [
  {
    name: "Start",
    className: "home",
    icon: "icon-hs_logo",
    url: 'strona-glowna',
    homepage_order: 0,
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
        submenu_li_title: "Czarnoksiężnik",
        submenu_url: "czarnoksieznik",
        submenu_li_className: "warlock"
      },
      {
        submenu_li_title: "Druid",
        submenu_url: "druid",
        submenu_li_className: "druid"
      },
      {
        submenu_li_title: "Kapłan",
        submenu_url: "kaplan",
        submenu_li_className: "priest"
      },
      {
        submenu_li_title: "Łotr",
        submenu_url: "lotr",
        submenu_li_className: "rogue"
      },
      {
        submenu_li_title: "Łowca",
        submenu_url: "lowca",
        submenu_li_className: "hunter"
      },
      {
        submenu_li_title: "Mag",
        submenu_url: "mag",
        submenu_li_className: "mage"
      },
      {
        submenu_li_title: "Paladyn",
        submenu_url: "paladyn",
        submenu_li_className: "paladin"
      },
      {
        submenu_li_title: "Szaman",
        submenu_url: "szaman",
        submenu_li_className: "shaman"
      },
      {
        submenu_li_title: "Wojownik",
        submenu_url: "wojownik",
        submenu_li_className: "warrior"
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
    submenu: [
      {
        icon: "icon-gvg",
        submenu_li_title: "Gobliny vs Gnomy",
        submenu_url: "gobliny-vs-gnomy",
        submenu_li_className: "goblins-vs-gnomes",
      },
      {
        submenu_li_title: "Wielki Turniej",
        submenu_url: "wielki-turniej",
        submenu_li_className: "the-grand-tournament",
      },
      {
        submenu_li_title: "Przedwieczni Bogowie",
        submenu_url: "przedwieczni-bogowie",
        submenu_li_className: "whispers-of-the-old-gods",
      },
      {
        submenu_li_title: "Ciemne Zaułki Gadżetonu",
        submenu_url: "ciemne-zaulki-gadzetonu",
        submenu_li_className: "mean-streets-of-gadgetzan",
      }
    ]
  },
  {
    name: "Przygody",
    className: "adventures",
    icon: "icon-adventures",
    url: 'przygody',
    homepage_order: 9,
    homepage_block_width: 0,
    submenu: [
      {
        submenu_li_title: "Klątwa Naxxramas",
        submenu_url: "klatwa-naxxramas",
        submenu_li_className: "curse-of-naxxramas",
      },
      {
        submenu_li_title: "Czarna góra",
        submenu_url: "czarna-gora",
        submenu_li_className: "blackrock-mountain",
      },
      {
        submenu_li_title: "Liga odkrywców",
        submenu_url: "liga-odkrywcow",
        submenu_li_className: "the-league-of-explorers",
      },
      {
        submenu_li_title: "Pewnej nocy w Karazhanie",
        submenu_url: "pewnej-nocy-w-karazhanie",
        submenu_li_className: "one-night-at-karazhan",
      }
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
    homepage_order: 8,
    homepage_block_width: 0
  }
];