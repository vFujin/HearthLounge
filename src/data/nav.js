export const navItems = [
  {
    name: "Home",
    className: "home",
    icon: "icon-hs_logo",
    url: 'home',
    homepage_order: 0,
    homepage_block_width: 0
  },
  {
    name: "Decks",
    className: "decks",
    icon: "icon-deck",
    url: 'decks',
    homepage_order: 1,
    homepage_block_width: 3,
    submenu: [
      {
        submenu_li_title: "Warlock",
        submenu_url: "czarnoksieznik",
        submenu_li_className: "warlock"
      },
      {
        submenu_li_title: "Druid",
        submenu_url: "druid",
        submenu_li_className: "druid"
      },
      {
        submenu_li_title: "Priest",
        submenu_url: "kaplan",
        submenu_li_className: "priest"
      },
      {
        submenu_li_title: "Rogue",
        submenu_url: "lotr",
        submenu_li_className: "rogue"
      },
      {
        submenu_li_title: "Hunter",
        submenu_url: "lowca",
        submenu_li_className: "hunter"
      },
      {
        submenu_li_title: "Mage",
        submenu_url: "mag",
        submenu_li_className: "mage"
      },
      {
        submenu_li_title: "Paladin",
        submenu_url: "paladyn",
        submenu_li_className: "paladin"
      },
      {
        submenu_li_title: "Shaman",
        submenu_url: "szaman",
        submenu_li_className: "shaman"
      },
      {
        submenu_li_title: "Warrior",
        submenu_url: "wojownik",
        submenu_li_className: "warrior"
      }
    ]
  },
  {
    name: "Cards",
    className: "cards",
    icon: "icon-card",
    url: 'cards',
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
    name: "Expansions",
    className: "expansions",
    icon: "icon-expansions",
    url: 'expansions',
    homepage_order: 3,
    homepage_block_width: 2,
    submenu: [
      {
        submenu_li_title: "Goblins vs Gnomes",
        submenu_url: "gobliny-kontra-gnomy",
        submenu_li_className: "goblins-vs-gnomes",
      },
      {
        submenu_li_title: "The Grand Tournament",
        submenu_url: "wielki-turniej",
        submenu_li_className: "the-grand-tournament",
      },
      {
        submenu_li_title: "Whispers of the Old Gods",
        submenu_url: "przedwieczni-bogowie",
        submenu_li_className: "whispers-of-the-old-gods",
      },
      {
        submenu_li_title: "Mean Streets of Gadgetzan",
        submenu_url: "ciemne-zaulki-gadzetonu",
        submenu_li_className: "mean-streets-of-gadgetzan",
      }
    ]
  },
  {
    name: "Adventures",
    className: "adventures",
    icon: "icon-adventures",
    url: 'adventures',
    homepage_order: 9,
    homepage_block_width: 0,
    submenu: [
      {
        submenu_li_title: "Curse of Naxxramas",
        submenu_url: "klatwa-naxxramas",
        submenu_li_className: "curse-of-naxxramas",
      },
      {
        submenu_li_title: "Blackrock Mountain",
        submenu_url: "czarna-gora",
        submenu_li_className: "blackrock-mountain",
      },
      {
        submenu_li_title: "The Leage of Explorers",
        submenu_url: "liga-odkrywcow",
        submenu_li_className: "the-league-of-explorers",
      },
      {
        submenu_li_title: "One Night at Karazhan",
        submenu_url: "pewnej-nocy-w-karazhanie",
        submenu_li_className: "one-night-at-karazhan",
      }
    ]
  },
  {
    name: "Create Deck",
    className: "create-deck",
    icon: "icon-create-deck",
    url: 'stworz-talie-kart',
    homepage_order: 4,
    homepage_block_width: 1
  },
  {
    name: "Forum",
    className: "forum",
    icon: "icon-bubbles2",
    url: 'forum',
    homepage_order: 5,
    homepage_block_width: 1
  },
  {
    name: "Tournaments",
    className: "tournaments",
    icon: "icon-trophy",
    url: 'turnieje',
    homepage_order: 6,
    homepage_block_width: 1
  },
  {
    name: "Streamers",
    className: "streams",
    icon: "icon-twitch",
    url: 'streamerzy',
    homepage_order: 7,
    homepage_block_width: 2
  },
  {
    name: "Login",
    className: "login",
    icon: "icon-login",
    url: '',
    homepage_order: 8,
    homepage_block_width: 0
  }
];