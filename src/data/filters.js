export const statistics = [
  {
    value: 'attack', label: 'Attack'
  },
  {
    value: 'cost', label: 'Cost'
  },
  {
    value: 'health', label: 'Health'
  }
];

export const faction = [
  {
    value: 'horde', label: 'Horda'
  },
  {
    value: 'alliance', label: 'Przymierze'
  },
  {
    value: 'neutral', label: 'Neutralne'
  }
];

export const race = [
  {
    value: 'beast', label: 'Bestia'
  },
  {
    value: 'demon', label: 'Demon'
  },
  {
    value: 'mech', label: 'Mech'
  },
  {
    value: 'murloc', label: 'Murlok'
  },
  {
    value: 'pirate', label: 'Pirat'
  },
  {
    value: 'dragon', label: "Smok"
  },
  {
    value: 'totem', label: "Totem"
  }
];

export const dust = [
  {
    value: 'dust-cost', label: 'Koszt Tajemniczego Pyłu'
  },
  {
    value: 'golden-dust-cost', label: 'Koszt Tajemniczego Pyłu złotej karty'
  },
  {
    value: 'disenchant-card-dust-gain', label: 'Zysk Tajemniczego Pyłu po odczarowaniu'
  },
  {
    value: 'disenchant-golden-card-dust-gain', label: 'Zysk Tajemniczego Pyłu po odczarowaniu złotej karty'
  }
];

export const mechanics = [
  {
    value: 'deathrattle', label: 'Agonia'
  },
  {
    value: 'divine-shield', label: 'Boska Tarcza'
  },
  {
    value: 'windfury', label: 'Furia Wichru'
  },
  {
    value: 'inspire', label: 'Inspiracja'
  },
  {
    value: 'combo', label: 'Kombinacja'
  },
  {
    value: 'immune', label: 'Niewrażliwość'
  },
  {
    value: 'spell-damage', label: 'Obrażenia zaklęć'
  },
  {
    value: 'discover', label: 'Odkrywanie'
  },
  {
    value: 'battlecry', label: 'Okrzyk Bojowy'
  },
  {
    value: 'taunt', label: 'Prowokacja'
  },
  {
    value: 'overload', label: 'Przeciążenie'
  },
  {
    value: 'secret', label: 'Sekret'
  },
  {
    value: 'enrage', label: 'Szał'
  },
  {
    value: 'charge', label: 'Szarża'
  },
  {
    value: 'stealth', label: 'Ukrycie'
  },
  {
    value: 'choose-one', label: 'Wybierz Jedno'
  },
  {
    value: 'silence', label: 'Wyciszenie'
  },
  {
    value: 'freeze', label: 'Zamrożenie'
  }
];

export const icon_filters = {
  adventures: [
    {
      name: 'Curse of Naxxramas',
      url: 'curse-of-naxxramas'
    },
    {
      name: 'Blackrock Mountain',
      url: 'blackrock-mountain'
    },
    {
      name: 'The League of Explorers',
      url: 'the-league-of-explorers'
    },
    {
      name: 'One Night at Karazhan',
      url: 'one-night-at-karazhan'
    }
  ],
  class: [
    //adding url in case if blizzard adds death knight / demon hunter classes in future
    {
      name: 'warlock',
      url: 'warlock'
    },
    {
      name: 'druid',
      url: 'druid'
    },
    {
      name: 'priest',
      url: 'priest'
    },
    {
      name: 'rogue',
      url: 'rogue'
    },
    {
      name: 'hunter',
      url: 'hunter'
    },
    {
      name: 'mage',
      url: 'mage'
    },
    {
      name: 'paladin',
      url: 'paladin',
    },
    {
      name: 'shaman',
      url: 'shaman'
    },
    {
      name: 'warrior',
      url: 'warrior'
    }
  ],
  expansions: [
    {
      name: 'Goblins vs Gnomes',
      url: 'goblins-vs-gnomes'
    },
    {
      name: 'The Grand Tournament',
      url: 'the-grand-tournament'
    },
    {
      name: 'Whispers of the Old Gods',
      url: 'whispers-of-the-old-gods'
    },
    {
      name: 'Mean Streets of Gadgetzan',
      url: 'mean-streets-of-gadgetzan'
    },
    {
      name: "Journey to Un'Goro",
      url: 'journey-to-ungoro'
    }
  ],
  mana_cost: [
    {
      name: 0,
      url: 0
    },
    {
      name: 1,
      url: 1
    },
    {
      name: 2,
      url: 2
    },
    {
      name: 3,
      url: 3
    },
    {
      name: 4,
      url: 4
    },
    {
      name: 5,
      url: 5
    },
    {
      name: 6,
      url: 6
    },
    {
      name: 7,
      url: 7
    },
    {
      name: 8,
      url: 8
    },
    {
      name: 10,
      url: 10
    }
  ],
  mode: [
    {
      name: "standard",
      url: "kraken"
    },
    {
      name: "wild",
      url: "wild"
    },
    {
      name: "tavern brawl",
      url: "brawl"
    },
    {
      name: "adventures",
      url: "adventures"
    }
  ],
  rarity: [
    {
      name: 'Free',
      url: 'free'
    },
    {
      name: 'Common',
      url: 'common'
    },
    {
      name: 'Rare',
      url: 'rare'
    },
    {
      name: 'Epic',
      url: 'epic'
    },
    {
      name: 'Legendary',
      url: 'legendary'
    }
  ]
};



export const archetype = [
  {
    value: 'renolock', label: 'Renolock'
  },
  {
    value: 'dragonpriest', label: 'Dragon Priest'
  },
  {
    value: 'cancerlock', label: 'Cancer Lock'
  }
];

export const deck_type = [
  {
    value: 'adventure', label: 'Adventure'
  },
  {
    value: 'tavern-brawl', label: 'Tavern Brawl'
  },
  {
    value: 'ranked', label: 'Ranked'
  },
  {
    value: 'tournament', label: 'Tournament'
  }
];