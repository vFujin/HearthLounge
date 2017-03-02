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

export const mana_cost = [
  {
    mana_cost: '0'
  },
  {
    mana_cost: '1'
  },
  {
    mana_cost: '2'
  },
  {
    mana_cost: '3'
  },
  {
    mana_cost: '4'
  },
  {
    mana_cost: '5'
  },
  {
    mana_cost: '6'
  },
  {
    mana_cost: '7'
  },
  {
    mana_cost: '8'
  },
  {
    mana_cost: '10'
  }

];

export const hs_class = [
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
];

export const expansions = [
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
];

export const adventures = [
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
];

export const rarity = [
  {
    name: 'Free'
  },
  {
    name: 'Common'
  },
  {
    name: 'Rare'
  },
  {
    name: 'Epic'
  },
  {
    name: 'Legendary'
  }
];

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

export const mode = [
  {
    name: "standard",
    icon: "kraken"
  },
  {
    name: "wild",
    icon: "wild"
  },
  {
    name: "tavern brawl",
    icon: "brawl"
  },
  {
    name: "adventures",
    icon: "adventures"
  }
];