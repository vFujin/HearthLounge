export const adventure_detail_tabs = [
  {
    name: 'Overview',
    url: 'overview'
  },
  {
    name: 'Cards',
    url: 'cards'
  },
  {
    name: 'Cost',
    url: 'cost'
  },
  {
    name: 'Structure',
    url: 'structure'
  },
  {
    name: 'Bosses',
    url: 'bosses'
  },
  {
    name: 'Class Challenges',
    url: 'class-challenges'
  }
];

export const adventure_details = [
  {
    adventure: "Curse of Naxxramas",
    url: 'naxxramas',
    overview: {
      cardback_heroic: '7',
      cinematic: 'https://www.youtube.com/embed/5SDJgW3A_sw',
      description: '',
      img: 'https://raw.githubusercontent.com/vFujin/HearthLounge/master/src/images/adventures/curse-of-naxxramas.jpg',
      gameboard: ''
    },
    cost: {
      wings: [
        {
          desc: 'First',
          gold: 700,
          usd: 6.99,
          eur: 5.99,
          gbp: 4.99,
        },
        {
          desc: 'Second',
          gold: 1400,
          usd: 9.99,
          eur: 8.99,
          gbp: 6.99
        },
        {
          desc: 'Third',
          gold: 2100,
          usd: 14.99,
          eur: 13.99,
          gbp: 11.49
        },
        {
          desc: 'Fourth',
          gold: 2800,
          usd: 19.99,
          eur: 17.99,
          gbp: 13.99
        },
        {
          desc: 'Fifth',
          gold: 3500,
          usd: 24.99,
          eur: 21.99,
          gbp: 17.49
        }
      ]
    },
    wings: {
      description: "",
      details: [
        {
          wing_title: "The Arachnid Quarter",
          url: 'the-arachnid-quarter',
          bosses: [
            {
              name: "Anub'Rekhan",
              url: 'anub-rekhan',
              reward: 'Haunted Creeper'
            },
            {
              name: "Grand Widow Faerlina",
              url: "grand-widow-faerlina",
              reward: "Nerub'ar Weblord"
            },
            {
              name:"Maexxna",
              url: 'maexxna',
              reward: "Nerubian Egg"
            }
          ]
        },
        {
          wing_title: "The Plague Quarter",
          url: "the-plague-quarter",
          bosses: [
            {
              name: "Noth the Plaguebringer",
              url: 'noth-the-plaguebringer',
              reward: "Stoneskin Gargoyle"
            },
            {
              name: "Heigan the Unclean",
              url: 'heigan-the-unclean',
              reward: "Unstable Ghoul"
            },
            {
              name: "Loatheb",
              url: 'loatheb',
              reward: "Sludge Belcher"
            }
          ]
        },
        {
          wing_title: "The Military Quarter",
          url: 'the-military-quarter',
          bosses: [
            {
              name: "Instructor Razuvious",
              url: 'instructor-razuvious',
              reward: "Dancing Swords"
            },
            {
              name: "Gothik the Harvester",
              url: 'gothik-the-harvester',
              reward: "Spectral Knight"
            },
            {
              name: "The Four Horsemen",
              url: 'the-four-horsemen',
              reward: "Deathlord"

            }
          ]
        },
        {
          wing_title: "The Construct Quarter",
          url: 'the-construct-quarter',
          bosses: [
            {
              name: "Patchwerk",
              url: 'patchwerk',
              reward: "Undertaker"
            },
            {
              name: "Grobbulus",
              url: 'grobbulus',
              reward: "Mad Scientist"
            },
            {
              name: "Gluth",
              url: 'gluth',
              reward: "Zombie Chow"
            },
            {
              name: "Thaddius",
              url: 'thaddius',
              reward: "Wailing Soul"
            }
          ]
        },
        {
          wing_title: "Frostwyrm Lair",
          url: 'frostwyrm-lair',
          bosses: [
            {
              name: "Sapphiron",
              url: 'sapphiron',
              reward: "Echoing Ooze"
            },
            {
              name: "Kel'Thuzad",
              url: 'kel-thuzad',
              reward: "Shade of Naxxramas"
            }
          ]
        }
      ]

    },
    structure: {
      wing_amount: 5,
      wing_details: [
        "Każde skrzydło było otwierane raz na tydzień przez 5 tygodni",
        "Ukończenie jednego ze skrzydeł odblokowuje legendarną kartę odkrywcy, którym grasz w danym skrzydle",
        "Przechodząc skrzydło odblokowujemy jego heroiczną wersję."
      ],
      bosses_amount: 15,
      bosses_difficulty: 'Każdy boss posiada dwa poziomy trudności, Normalny oraz Heroiczny.',
      class_challenges: 9,
      class_challenges_details: "Każde wyzwanie klasowe ma nagrodę w postaci jednej karty klasowej (2 kopie)."
    },
    class_challenges: [
      {
        playerClass: 'druid',
        reward: "Mounted Raptor"
      },
      {
        playerClass: 'hunter',
        reward: "Dart Trap"
      },
      {
        playerClass: 'mage',
        reward: "Animated Armor"
      },
      {
        playerClass: 'paladin',
        reward: "Keeper of Uldaman"
      },
      {
        playerClass: 'priest',
        reward: "Entomb"
      },
      {
        playerClass: 'rogue',
        reward: "Tomb Pillager"
      },
      {
        playerClass: 'shaman',
        reward: "Everyfin is Awesome"
      },
      {
        playerClass: 'warlock',
        reward: "Dark Peddler"
      },
      {
        playerClass: 'warrior',
        reward: "Obsidian Destroyer"
      }
    ],
    cards: {
      card_amount: 30,
      legendary: 5,
      class_ones: 18
    }
  },
  {
    adventure: "Blackrock Mountain",
    url: "blackrock-mountain",
    overview: {
      cardback_event: '18',
      cardback_heroic: '21',
      cinematic: 'https://www.youtube.com/embed/jsH9w5HW-9w',
      description:'',
      img: 'https://raw.githubusercontent.com/vFujin/HearthLounge/master/src/images/adventures/blackrock-mountain.jpg',
      gameboard: ''
    },
    cost: {
      wings: [
        {
          desc: 'First',
          gold: 700,
          usd: 6.99,
          eur: 5.99,
          gbp: 4.99,
        },
        {
          desc: 'Second',
          gold: 1400,
          usd: 9.99,
          eur: 8.99,
          gbp: 6.99
        },
        {
          desc: 'Third',
          gold: 2100,
          usd: 14.99,
          eur: 13.99,
          gbp: 11.49
        },
        {
          desc: 'Fourth',
          gold: 2800,
          usd: 19.99,
          eur: 17.99,
          gbp: 13.99
        },
        {
          desc: 'Fifth',
          gold: 3500,
          usd: 24.99,
          eur: 21.99,
          gbp: 17.49
        }
      ]
    },
    wings: {
      description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
      details: [
        {
          wing_title: "Blackrock Depths",
          url: 'blackrock-depths',
          bosses: [
            {
              name: "Grim Guzzler",
              url: 'grim-guzzler',
              reward: "Grim Patron"
            },
            {
              name: "Dark Iron Arena",
              url: 'dark-iron-arena',
              reward: "Gang Up"
            },
            {
              name:"Emperor Thaurissan",
              url: 'emperor-thaurissan',
              reward: "Resurrect"
            }
          ]
        },
        {
          wing_title: "Molten Core",
          url: "molten-core",
          bosses: [
            {
              name: "Garr",
              url: 'garr',
              reward: "Druid of the Flame"
            },
            {
              name: "Baron Geddon",
              url: 'baron-geddon',
              reward: "Blackwing Technican"
            },
            {
              name: "Ragnaros the Firelord",
              url: 'ragnaros-the-firelord',
              reward: "Imp Gang Boss"
            }
          ]
        },
        {
          wing_title: "Blackrock Spire",
          url: "blackrock-spire",
          bosses: [
            {
              name: "Highlord Omokk",
              url: 'highlord-omokk',
              reward: "Core Rager"
            },
            {
              name: "General Drakkisath",
              url: 'general-drakkisath',
              reward: "Dragon Consort"
            },
            {
              name: "Rend Blackhand",
              url: "rend-blackhand",
              reward: "Dragon Egg"
            }
          ]
        },
        {
          wing_title: "Blackwing Lair",
          url: "blackwing-lair",
          bosses: [
            {
              name: "Razorgore the Untamed",
              url: 'razorgore-the-untamed',
              reward: "Revenge"
            },
            {
              name: "Vaelastrasz the Corrupt",
              url: 'vaelastrasz-the-corrupt',
              reward: "Flamewaker"
            },
            {
              name: "Chromaggus",
              url: 'chromaggus',
              reward: "Hungry Dragon"
            },
            {
              name: "Lord Victor Nefarius",
              url: 'lord-victor-nefarius',
              reward: "Fireguard Destroyer"
            }
          ]
        },
        {
          wing_title: "Hidden Laboratory",
          url: "hidden-laboratory",
          bosses: [
            {
              name: "Omnotron Defense System",
              url: 'omnotron-defense-system',
              reward: "Volcanic Drake"
            },
            {
              name: "Maloriak",
              url: 'maloriak',
              reward: "Blackwing Corruptor"
            },
            {
              name: "Atramedes",
              url: 'atramedes',
              reward: "Drakonid Crusher"
            },
            {
              name: "Nefarian",
              url: 'nefarian',
              reward: "Dragonkin Sorcerer"
            }
          ]
        }
      ]
    },
    structure: {
      wing_amount: 5,
      wing_details: [
        "Każde skrzydło było otwierane raz na tydzień przez 5 tygodni",
        "Ukończenie jednego ze skrzydeł odblokowuje legendarną kartę odkrywcy, którym grasz w danym skrzydle",
        "Przechodząc skrzydło odblokowujemy jego heroiczną wersję."
      ],
      bosses_amount: 17,
      bosses_difficulty: 'Każdy boss posiada dwa poziomy trudności, Normalny oraz Heroiczny.',
      class_challenges: 9,
      class_challenges_details: "Każde wyzwanie klasowe ma nagrodę w postaci jednej karty klasowej (2 kopie)."
    },
    class_challenges: [
      {
        playerClass: 'druid',
        reward: "Volcanic Lumberer"
      },
      {
        playerClass: 'hunter',
        reward: "Quick Shot"
      },
      {
        playerClass: 'mage',
        reward: "Dragon's Breath"
      },
      {
        playerClass: 'paladin',
        reward: "Solemn Vigil"
      },
      {
        playerClass: 'priest',
        reward: "Twilight Whelp"
      },
      {
        playerClass: 'rogue',
        reward: "Dark Iron Skulker"
      },
      {
        playerClass: 'shaman',
        reward: "Lava Shock"
      },
      {
        playerClass: 'warlock',
        reward: "Demonwrath"
      },
      {
        playerClass: 'warrior',
        reward: "Axe Flinger"
      }
    ],
    cards: {
      card_amount: 31,
      legendary: 5,
      class_ones: 18
    }
  },
  {
    adventure: "The League of Explorers",
    url: "the-league-of-explorers",
    overview: {
      cardback_heroic: '37',
      cinematic: 'https://www.youtube.com/embed/wmu0XXpUYog',
      description: '',
      img: 'https://raw.githubusercontent.com/vFujin/HearthLounge/master/src/images/adventures/the-league-of-explorers.jpg',
      gameboard: ''
    },
    cost: {
      wings: [
        {
          desc: 'First',
          gold: 700,
          usd: 6.99,
          eur: 5.99,
          gbp: 4.99,
        },
        {
          desc: 'Second',
          gold: 1400,
          usd: 9.99,
          eur: 8.99,
          gbp: 6.99
        },
        {
          desc: 'Third',
          gold: 2100,
          usd: 14.99,
          eur: 13.99,
          gbp: 11.49
        },
        {
          desc: 'Fourth',
          gold: 2800,
          usd: 19.99,
          eur: 17.99,
          gbp: 13.99
        }
      ]
    },
    wings: {
      description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
      details: [
        {
          wing_title: "Temple of Orsis",
          url: "temple-of-orsis",
          bosses: [
            {
              name: "Zinaar",
              url: 'zinaar',
              reward: ["Djinni of Zephyrs", "Jeweled Scarab"]
            },
            {
              name: "Sun Raider Phaerix",
              url: 'sun-raider-phaerix',
              reward: ["Anubisath Sentinel", "Summoning Stone"]
            },
            {
              name:"Temple Escape",
              url: 'temple-escape',
              reward: ["Rumbling Elemental", "Sacred Trial"]
            }
          ]
        },
        {
          wing_title: "Uldaman",
          url: "uldaman",
          bosses: [
            {
              name: "Chieftain Scarvash",
              url: 'chieftain-scarvash',
              reward: ["Tunnel Trogg", "Ethereal Conjurer"]
            },
            {
              name: "Mine Cart Rush",
              url: 'mine-cart-rush',
              reward: ["Tomb Spider", "Unearthed Raptor"]
            },
            {
              name: "Archaedas",
              url: 'archaedas',
              reward: ["Fierce Monkey", "Reliquary Seeker"]
            }
          ]
        },
        {
          wing_title: "The Ruined City",
          url: "the-ruined-city",
          bosses: [
            {
              name: "Lord Slitherspear",
              url: 'lord-slitherspear',
              reward: ["Huge Toad", "Gorillabot A-3"]
            },
            {
              name: "Giantfin",
              url: 'giantfin',
              reward: ["Anyfin Can Happen", "Murloc Tinyfin"]
            },
            {
              name: "Lady Naz'Jar",
              url: 'lady-nazjar',
              reward: ["Pit Snake", "Naga Sea Witch"]
            }
          ]
        },
        {
          wing_title: "Hall of Explorers",
          url: "hall-of-explorers",
          bosses: [
            {
              name: "Skelesaurus Hex",
              url: 'skelesaurus-hex',
              reward: ["Fossilized Devilsaur", "Raven Idol"]
            },
            {
              name: "The Steel Sentinel",
              url: 'the-steel-sentinel',
              reward: ["Cursed Blade", "Museum Curator"]
            },
            {
              name: "Arch-Thief Rafaam",
              url: 'arch-thief-rafaam',
              reward: ["Curse of Rafaam", "Wobbling Runts"]
            },
            {
              name: "Rafaam Unleashed",
              url: 'rafaam-unleashed',
              reward: ["Desert Camel", "Eerie Statue"]
            }
          ]
        }
      ]
    },
    structure: {
      wing_amount: 4,
      wing_details: [
        "Każde skrzydło było otwierane raz na tydzień przez 4 tygodnie",
        "Ukończenie jednego ze skrzydeł odblokowuje legendarną kartę odkrywcy, którym grasz w danym skrzydle",
        "Przechodząc skrzydło odblokowujemy jego heroiczną wersję."
      ],
      bosses_amount: 13,
      bosses_difficulty: 'Każdy boss posiada dwa poziomy trudności, Normalny oraz Heroiczny.',
      class_challenges: 9,
      class_challenges_details: "Każde wyzwanie klasowe ma nagrodę w postaci jednej karty klasowej (2 kopie)."
    },
    class_challenges: [
      {
        playerClass: 'druid',
        reward: "Volcanic Lumberer"
      },
      {
        playerClass: 'hunter',
        reward: "Quick Shot"
      },
      {
        playerClass: 'mage',
        reward: "Dragon's Breath"
      },
      {
        playerClass: 'paladin',
        reward: "Solemn Vigil"
      },
      {
        playerClass: 'priest',
        reward: "Twilight Whelp"
      },
      {
        playerClass: 'rogue',
        reward: "Dark Iron Skulker"
      },
      {
        playerClass: 'shaman',
        reward: "Lava Shock"
      },
      {
        playerClass: 'warlock',
        reward: "Demonwrath"
      },
      {
        playerClass: 'warrior',
        reward: "Axe Flinger"
      }
    ],
    cards: {
      card_amount: 45
    }
  },
  {
    adventure: "One Night in Karazhan",
    url: "karazhan",
    overview: {
      cardback_event: '56',
      cardback_heroic: '53',
      cinematic: 'https://www.youtube.com/embed/wmu0XXpUYog',
      description: '',
      img: 'https://raw.githubusercontent.com/vFujin/HearthLounge/master/src/images/adventures/one-night-in-karazhan.jpg',
      gameboard: ''
    },
    cost: {
      wings: [
        {
          desc: 'Prologue'
        },
        {
          desc: 'First',
          gold: 700,
          usd: 6.99,
          eur: 5.99,
          gbp: 4.99,
        },
        {
          desc: 'Second',
          gold: 1400,
          usd: 9.99,
          eur: 8.99,
          gbp: 6.99
        },
        {
          desc: 'Third',
          gold: 2100,
          usd: 14.99,
          eur: 13.99,
          gbp: 11.49
        },
        {
          desc: 'Fourth',
          gold: 2800,
          usd: 19.99,
          eur: 17.99,
          gbp: 13.99
        },
        {
          desc: 'Fifth',
          gold: 3500,
          usd: 24.99,
          eur: 21.99,
          gbp: 17.49
        }
      ]
    },
    wings: {
      description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
      details: [
        {
          wing_title: "The Spire",
          url: "the-spire",
          bosses: [
            {
              name: "Shade of Aran",
              url: "shade-of-aran",
              reward: ["Medivh's Valet", "Spirit Claws"]
            },
            {
              name: "Netherspite",
              url: 'netherspite',
              reward: ["Netherspite Historian", "Book Wyrm"]
            },
            {
              name: "Free Medivh!",
              url: 'free-medivh',
              reward: ["Malchezaar's Imp", "Ironforge Portal"]
            }
          ]
        },
        {
          wing_title: "The Menagerie",
          url: "the-menagerie",
          bosses: [
            {
              name: "Curator",
              url: "curator",
              reward: ["Zoobot", "Menagerie Warden"]
            },
            {
              name: "Nightbane",
              url: 'nightbane',
              reward: ["Nightbane Templar", "Runic Egg"]
            },
            {
              name: "Teresian Illhoof",
              url: 'terestian-illhoof',
              reward: ["Purify", "Avian Watcher"]
            }
          ]
        },
        {
          wing_title: "The Opera",
          url: "the-opera",
          bosses: [
            {
              name: "Julianne",
              url: 'julianne',
              reward: ["Pompous Thespian", "Onyx Bishop"]
            },
            {
              name: "Big Bad Wolf",
              url: 'big-bad-wolf',
              reward: ["Kindly Grandmother", "Arcane Giant"]
            },
            {
              name: "The Crone",
              url: 'the-crone',
              reward: ["Wicked Witchdoctor", "Moat Lurker"]
            }
          ]
        },
        {
          wing_title: "The Parlor",
          url: "the-parlor",
          bosses: [
            {
              name: "Silverware Golem",
              url: 'silverware-golem',
              reward: ["Deadly Fork", "Silverware Golem"]
            },
            {
              name: "Magic Mirror",
              url: 'magic-mirror',
              reward: ["Arcane Anomaly", "Pantry Spider"]
            },
            {
              name: "Chess",
              url: 'chess',
              reward: ["Ivory Knight", "Protect the King!"]
            }
          ]
        },
        {
          wing_title: "The Prologue",
          url: "the-prologue",
          bosses: [
            {
              name: "An Uninvited Guest",
              url: "an-uninvited-guest",
              reward: ["Enchanted Raven", "Firelands Portal"]
            }
          ]
        }
      ]
    },
    structure: {
      wing_amount: 4,
      wing_details: [
        "Każde skrzydło było otwierane raz na tydzień przez 4 tygodnie",
        "Ukończenie jednego ze skrzydeł odblokowuje legendarną kartę odkrywcy, którym grasz w danym skrzydle",
        "Przechodząc skrzydło odblokowujemy jego heroiczną wersję."
      ],
      bosses_amount: 13,
      bosses_difficulty: 'Każdy boss posiada dwa poziomy trudności, Normalny oraz Heroiczny.',
      class_challenges: 9,
      class_challenges_details: "Każde wyzwanie klasowe ma nagrodę w postaci jednej karty klasowej (2 kopie)."
    },
    class_challenges: [
      {
        playerClass: 'druid',
        reward: "Volcanic Lumberer"
      },
      {
        playerClass: 'hunter',
        reward: "Quick Shot"
      },
      {
        playerClass: 'mage',
        reward: "Dragon's Breath"
      },
      {
        playerClass: 'paladin',
        reward: "Solemn Vigil"
      },
      {
        playerClass: 'priest',
        reward: "Twilight Whelp"
      },
      {
        playerClass: 'rogue',
        reward: "Dark Iron Skulker"
      },
      {
        playerClass: 'shaman',
        reward: "Lava Shock"
      },
      {
        playerClass: 'warlock',
        reward: "Demonwrath"
      },
      {
        playerClass: 'warrior',
        reward: "Axe Flinger"
      }
    ],
    cards: {
      card_amount: 45
    }
  }
];