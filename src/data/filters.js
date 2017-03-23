export const icon_filters = {
  cardSet: [
    {
      name: 'Classic',
      url: 'classic'
    },
    {
      name: 'Promo',
      url: 'promo'
    },

    {
      name: 'Naxxramas',
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
      name: 'Karazhan',
      url: 'one-night-at-karazhan'
    },
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
  playerClass: [
    {
      name: 'Warlock',
      url: 'warlock'
    },
    {
      name: 'Druid',
      url: 'druid'
    },
    {
      name: 'Priest',
      url: 'priest'
    },
    {
      name: 'Rogue',
      url: 'rogue'
    },
    {
      name: 'Hunter',
      url: 'hunter'
    },
    {
      name: 'Mage',
      url: 'mage'
    },
    {
      name: 'Paladin',
      url: 'paladin',
    },
    {
      name: 'Shaman',
      url: 'shaman'
    },
    {
      name: 'Warrior',
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
  cost: [
    {
      name: 0,
      url: 0
    },
    {
      name: 1,
      url: 1
    },
    {
      name: '2',
      url: 2
    },
    {
      name: '3',
      url: 3
    },
    {
      name: '4',
      url: 4
    },
    {
      name: '5',
      url: 5
    },
    {
      name: '6',
      url: 6
    },
    {
      name: '7',
      url: 7
    },
    {
      name: '8',
      url: 8
    },
    {
      name: '10',
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
      url: 'rarity'
    },
    {
      name: 'Common',
      url: 'rarity'
    },
    {
      name: 'Rare',
      url: 'rarity'
    },
    {
      name: 'Epic',
      url: 'rarity'
    },
    {
      name: 'Legendary',
      url: 'rarity'
    }
  ]
};

// function (card) {
//   return Object.keys(query).every(function (queryKey) {
//     if (queryKey === 'mechanics') {
//       let arr = [];
//       return query[queryKey].some(queryValue => {
//         return card[queryKey].indexOf(queryValue) > -1;
//       });
//     }
//     if (queryKey === 'health') {
//
//     } else if (query[queryKey].constructor === Array) {
//       return query[queryKey].some(queryValue => {
//
//         return card[queryKey] == queryValue
//       });
//     }
//     else {
//       return card[queryKey] == query[queryKey];
//     }
//   })
// }