export const icon_filters = {
  cardSet: [
    {
      name: 'Classic',
      url: 'classic',
      isStandard: true
    },
    {
      name: 'Basic',
      url: 'basic',
      isStandard: true
    },
    {
      name: 'Promo',
      url: 'promo',
      isStandard: true
    },
    {
      name: 'Missions',
      url: 'missions',
      isStandard: true
    },
    {
      name: 'Reward',
      url: 'reward',
      isStandard: true
    },
    {
      name: 'Hall of Fame',
      url: 'hall-of-fame',
      isStandard: false
    },
    {
      name: 'Naxxramas',
      url: 'naxxramas',
      isStandard: false
    },
    {
      name: 'Blackrock Mountain',
      url: 'blackrock-mountain',
      isStandard: false
    },
    {
      name: 'The League of Explorers',
      url: 'the-league-of-explorers',
      isStandard: false
    },
    {
      name: 'Karazhan',
      url: 'karazhan',
      isStandard: true
    },
    {
      name: 'Goblins vs Gnomes',
      url: 'goblins-vs-gnomes',
      isStandard: false
    },
    {
      name: 'The Grand Tournament',
      url: 'the-grand-tournament',
      isStandard: false
    },
    {
      name: 'Whispers of the Old Gods',
      url: 'whispers-of-the-old-gods',
      isStandard: true
    },
    {
      name: 'Mean Streets of Gadgetzan',
      url: 'mean-streets-of-gadgetzan',
      isStandard: true
    },
    {
      name: "Journey to Un'Goro",
      url: 'journey-to-ungoro',
      isStandard: true
    }
  ],
  adventures: [
    {
      name: 'Curse of Naxxramas',
      url: 'naxxramas'
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
      url: 'karazhan'
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
      name: '0',
      url: 0
    },
    {
      name: '1',
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
      url: "mammoth"
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
  multiClassGroup:[
    {
      name: "Grimy Goons",
      url: "grimy-goons"
    },
    {
      name: "Jade Lotus",
      url: "jade-lotus"
    },
    {
      name: "Kabal",
      url: "kabal"
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