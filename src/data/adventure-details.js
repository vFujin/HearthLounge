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

export const boss_details = [
  {
    name: 'Overview',
    url: 'overview'
  },
  {
    name: 'Strategy',
    en: 'strategy'
  },
  {
    name: 'Rewards',
    url: 'rewards',
  },
  {
    name: 'Rest wing bosses',
    url: 'rest-wing-bosses'
  },
  {
    title: 'Winning decks',
    url: 'winning-decks',
  }
];

export const adventure_details = [
  {
    adventure: "naxxramas",
    singular_adventure_name: "Klątwa Naxxramas",
    plural_aventure_name: "Klątwy Naxxramas",
    description: 'Klątwa Naxxramas jest pięcio skrzydłową przygodą, gdzie każde skrzydło reprezentuje osobne skrzydło z instancji Naxxramas w World of Warcraft. Gracz pokonując skrzydła może dostać 30 nowych kart dodanych w tej przygodzie.',
    cost: {
      wings: [
        {
          desc: 'Pierwsze',
          gold: 700,
          eur: 5.99,
          pln: 25.19
        },
        {
          desc: 'Drugie',
          gold: 1400,
          eur: 8.99,
          pln: 37.75
        },
        {
          desc: 'Trzecie',
          gold: 2100,
          eur: 13.99,
          pln: 58.75
        },
        {
          desc: 'Czwarte',
          gold: 2800,
          eur: 17.99,
          pln: 75.55
        },
        {
          desc: 'Piąte',
          gold: 3500,
          eur: 21.99,
          pln: 92.35
        }
      ],
    },
    wings: {
      description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
      details: [
        {
          wing_title: "The Arachnid Quarter",
          url: 'the-arachnid-quarter',
          bosses: [
            {
              boss: "Anub'Rekhan",
              url: 'anub-rekhan',
              reward: 'Haunted Creeper'
            },
            {
              boss: "Grand Widow Faerlina",
              url: "grand-widow-faerlina",
              reward: "Nerub'ar Weblord"
            },
            {
              boss:"Maexxna",
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
              boss: "Noth the Plaguebringer",
              url: 'noth-the-plaguebringer',
              reward: "Stoneskin Gargoyle"
            },
            {
              boss: "Heigan the Unclean",
              url: 'heigan-the-unclean',
              reward: "Unstable Ghoul"
            },
            {
              boss: "Loatheb",
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
              boss: "Instructor Razuvious",
              url: 'instructor-razuvious',
              reward: "Dancing Swords"
            },
            {
              boss: "Gothik the Harvester",
              url: 'gothik-the-harvester',
              reward: "Spectral Knight"
            },
            {
              boss: "The Four Horsemen",
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
              boss: "Patchwerk",
              url: 'patchwerk',
              reward: "Undertaker"
            },
            {
              boss: "Grobbulus",
              url: 'grobbulus',
              reward: "Mad Scientist"
            },
            {
              boss: "Gluth",
              url: 'gluth',
              reward: "Zombie Chow"
            },
            {
              boss: "Thaddius",
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
              boss: "Sapphiron",
              url: 'sapphiron',
              reward: "Echoing Ooze"
            },
            {
              boss: "Kel'Thuzad",
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
        class: 'druid',
        card_reward: "Mounted Raptor"
      },
      {
        class: 'hunter',
        card_reward: "Dart Trap"
      },
      {
        class: 'mage',
        card_reward: "Animated Armor"
      },
      {
        class: 'paladin',
        card_reward: "Keeper of Uldaman"
      },
      {
        class: 'priest',
        card_reward: "Entomb"
      },
      {
        class: 'rogue',
        card_reward: "Tomb Pillager"
      },
      {
        class: 'shaman',
        card_reward: "Everyfin is Awesome"
      },
      {
        class: 'warlock',
        card_reward: "Dark Peddler"
      },
      {
        class: 'warrior',
        card_reward: "Obsidian Destroyer"
      }
    ],
    cards: {
      card_amount: 30,
      legendary: 5,
      class_ones: 18
    }
  },
  {
    adventure: "blackrock-mountain",
    singular_adventure_name: "Czarna Góra",
    plural_aventure_name: "Czarnej Góry",
    description: 'gdzie każde skrzydło reprezentuje osobne skrzydło z instancji Blackrock w World of Warcraft',
    cost: {
      wings: [
        {
          desc: 'Pierwsze',
          gold: 700,
          eur: 5.99,
          pln: 25.19
        },
        {
          desc: 'Drugie',
          gold: 1400,
          eur: 8.99,
          pln: 37.75
        },
        {
          desc: 'Trzecie',
          gold: 2100,
          eur: 13.99,
          pln: 58.75
        },
        {
          desc: 'Czwarte',
          gold: 2800,
          eur: 17.99,
          pln: 75.55
        },
        {
          desc: 'Piąte',
          gold: 3500,
          eur: 21.99,
          pln: 92.35
        }
      ],
    },
    wings: {
      description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
      details: [
        {
          wing_title: "Blackrock Depths",
          url: 'blackrock-depths',
          bosses: [
            {
              boss: "Grim Guzzler",
              url: 'grim-guzzler',
              reward: "Grim Patron"
            },
            {
              boss: "Dark Iron Arena",
              url: 'dark-iron-arena',
              reward: "Gang Up"
            },
            {
              boss:"Emperor Thaurissan",
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
              boss: "Garr",
              url: 'garr',
              reward: "Druid of the Flame"
            },
            {
              boss: "Baron Geddon",
              url: 'baron-geddon',
              reward: "Blackwing Technican"
            },
            {
              boss: "Ragnaros the Firelord",
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
              boss: "Highlord Omokk",
              url: 'highlord-omokk',
              reward: "Core Rager"
            },
            {
              boss: "General Drakkisath",
              url: 'general-drakkisath',
              reward: "Dragon Consort"
            },
            {
              boss: "Rend Blackhand",
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
              boss: "Razorgore the Untamed",
              url: 'razorgore-the-untamed',
              reward: "Revenge"
            },
            {
              boss: "Vaelastrasz the Corrupt",
              url: 'vaelastrasz-the-corrupt',
              reward: "Flamewaker"
            },
            {
              boss: "Chromaggus",
              url: 'chromaggus',
              reward: "Hungry Dragon"
            },
            {
              boss: "Lord Victor Nefarius",
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
              boss: "Omnotron Defense System",
              url: 'omnotron-defense-system',
              reward: "Volcanic Drake"
            },
            {
              boss: "Maloriak",
              url: 'maloriak',
              reward: "Blackwing Corruptor"
            },
            {
              boss: "Atramedes",
              url: 'atramedes',
              reward: "Drakonid Crusher"
            },
            {
              boss: "Nefarian",
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
        class: 'druid',
        card_reward: "Volcanic Lumberer"
      },
      {
        class: 'hunter',
        card_reward: "Quick Shot"
      },
      {
        class: 'mage',
        card_reward: "Dragon's Breath"
      },
      {
        class: 'paladin',
        card_reward: "Solemn Vigil"
      },
      {
        class: 'priest',
        card_reward: "Twilight Whelp"
      },
      {
        class: 'rogue',
        card_reward: "Dark Iron Skulker"
      },
      {
        class: 'shaman',
        card_reward: "Lava Shock"
      },
      {
        class: 'warlock',
        card_reward: "Demonwrath"
      },
      {
        class: 'warrior',
        card_reward: "Axe Flinger"
      }
    ],
    cards: {
      card_amount: 31,
      legendary: 5,
      class_ones: 18
    }
  },
  {
    adventure: "the-league-of-explorers",
    singular_adventure_name: "Liga Eksplorerów",
    plural_aventure_name: "Ligi Eksplorerów",
    description: '',
    img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/home.expansion-slider/liga_odkrywcow.jpg',
    cost: {
      wings: [
        {
          desc: 'Pierwsze',
          gold: 700,
          eur: 5.99,
          pln: 25.19
        },
        {
          desc: 'Drugie',
          gold: 1400,
          eur: 8.99,
          pln: 37.75
        },
        {
          desc: 'Trzecie',
          gold: 2100,
          eur: 13.99,
          pln: 58.75
        },
        {
          desc: 'Czwarte',
          gold: 2800,
          eur: 17.99,
          pln: 75.55
        },
        {
          desc: 'Piąte',
          gold: 3500,
          eur: 21.99,
          pln: 92.35
        }
      ],
    },
    wings: {
      description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
      details: [
        {
          wing_title: "Temple of Orsis",
          url: "temple-of-orsis",
          bosses: [
            {
              boss: "Zinaar",
              url: 'zinaar',
              reward: ["Djinni of Zephyrs", "Jeweled Scarab"]
            },
            {
              boss: "Sun Raider Phaerix",
              url: 'sun-raider-phaerix',
              reward: ["Anubisath Sentinel", "Summoning Stone"]
            },
            {
              boss:"Temple Escape",
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
              boss: "Chieftain Scarvash",
              url: 'chieftain-scarvash',
              reward: ["Tunnel Trogg", "Ethereal Conjurer"]
            },
            {
              boss: "Mine Cart Rush",
              url: 'mine-cart-rush',
              reward: ["Tomb Spider", "Unearthed Raptor"]
            },
            {
              boss: "Archaedas",
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
              boss: "Lord Slitherspear",
              url: 'lord-slitherspear',
              reward: ["Huge Toad", "Gorillabot A-3"]
            },
            {
              boss: "Giantfin",
              url: 'giantfin',
              reward: ["Anyfin Can Happen", "Murloc Tinyfin"]
            },
            {
              boss: "Lady Naz'Jar",
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
              boss: "Skelesaurus Hex",
              url: 'skelesaurus-hex',
              reward: ["Fossilized Devilsaur", "Raven Idol"]
            },
            {
              boss: "The Steel Sentinel",
              url: 'the-steel-sentinel',
              reward: ["Cursed Blade", "Museum Curator"]
            },
            {
              boss: "Arch-Thief Rafaam",
              url: 'arch-thief-rafaam',
              reward: ["Curse of Rafaam", "Wobbling Runts"]
            },
            {
              boss: "Rafaam Unleashed",
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
        class: 'druid',
        card_reward: "Volcanic Lumberer"
      },
      {
        class: 'hunter',
        card_reward: "Quick Shot"
      },
      {
        class: 'mage',
        card_reward: "Dragon's Breath"
      },
      {
        class: 'paladin',
        card_reward: "Solemn Vigil"
      },
      {
        class: 'priest',
        card_reward: "Twilight Whelp"
      },
      {
        class: 'rogue',
        card_reward: "Dark Iron Skulker"
      },
      {
        class: 'shaman',
        card_reward: "Lava Shock"
      },
      {
        class: 'warlock',
        card_reward: "Demonwrath"
      },
      {
        class: 'warrior',
        card_reward: "Axe Flinger"
      }
    ],
    cards: {
      card_amount: 45
    }
  },
  {
    adventure: "karazhan",
    singular_adventure_name: "Pewnej Nocy w Karazhanie",
    plural_aventure_name: "Pewnej Nocy w Karazhanie",
    description: '',
    cost: {
      wings: [
        {
          desc: 'Pierwsze',
          gold: 700,
          eur: 5.99,
          pln: 25.19
        },
        {
          desc: 'Drugie',
          gold: 1400,
          eur: 8.99,
          pln: 37.75
        },
        {
          desc: 'Trzecie',
          gold: 2100,
          eur: 13.99,
          pln: 58.75
        },
        {
          desc: 'Czwarte',
          gold: 2800,
          eur: 17.99,
          pln: 75.55
        },
        {
          desc: 'Piąte',
          gold: 3500,
          eur: 21.99,
          pln: 92.35
        }
      ],
    },
    wings: {
      description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
      details: [
        {
          wing_title: "The Spire",
          url: "the-spire",
          bosses: [
            {
              boss: "Shade of Aran",
              url: "shade-of-aran",
              reward: ["Medivh's Valet", "Spirit Claws"]
            },
            {
              boss: "Netherspite",
              url: 'netherspite',
              reward: ["Netherspite Historian", "Book Wyrm"]
            },
            {
              boss: "Free Medivh!",
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
              boss: "Curator",
              url: "curator",
              reward: ["Zoobot", "Menagerie Warden"]
            },
            {
              boss: "Nightbane",
              url: 'nightbane',
              reward: ["Nightbane Templar", "Runic Egg"]
            },
            {
              boss: "Teresian Illhoof",
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
              boss: "Julianne",
              url: 'julianne',
              reward: ["Pompous Thespian", "Onyx Bishop"]
            },
            {
              boss: "Big Bad Wolf",
              url: 'big-bad-wolf',
              reward: ["Kindly Grandmother", "Arcane Giant"]
            },
            {
              boss: "The Crone",
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
              boss: "Silverware Golem",
              url: 'silverware-golem',
              reward: ["Deadly Fork", "Silverware Golem"]
            },
            {
              boss: "Magic Mirror",
              url: 'magic-mirror',
              reward: ["Arcane Anomaly", "Pantry Spider"]
            },
            {
              boss: "Chess",
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
              boss: "An Uninvited Guest",
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
        class: 'druid',
        card_reward: "Volcanic Lumberer"
      },
      {
        class: 'hunter',
        card_reward: "Quick Shot"
      },
      {
        class: 'mage',
        card_reward: "Dragon's Breath"
      },
      {
        class: 'paladin',
        card_reward: "Solemn Vigil"
      },
      {
        class: 'priest',
        card_reward: "Twilight Whelp"
      },
      {
        class: 'rogue',
        card_reward: "Dark Iron Skulker"
      },
      {
        class: 'shaman',
        card_reward: "Lava Shock"
      },
      {
        class: 'warlock',
        card_reward: "Demonwrath"
      },
      {
        class: 'warrior',
        card_reward: "Axe Flinger"
      }
    ],
    cards: {
      card_amount: 45
    }
  }
];