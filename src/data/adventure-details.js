export const topbar_tabs = [
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
    name: 'Class Challanges',
    url: 'class-challanges'
  }
];

export const adventure_details = [
  {
    adventure: "curse-of-naxxramas",
    singular_adventure_name: "Klątwa Naxxramas",
    plural_aventure_name: "Klątwy Naxxramas",
    description: 'Klątwa Naxxramas jest pięcio skrzydłową przygodą, gdzie każde skrzydło reprezentuje osobne skrzydło z instancji Naxxramas w World of Warcraft. Gracz pokonując skrzydła może dostać 30 nowych kart dodanych w tej przygodzie.',
    img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/home.expansion-slider/klatwa_naxxramas.jpg',
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
    bosses: {
      description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
      details: [
        {
          wing_title: "The Arachnid Quarter",
          url: 'the-arachnid-quarter',
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/anub-rekhan.jpg',
              boss: "Anub'Rekhan",
              url: 'anub-rekhan'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/grand-widow-faerlina.jpg',
              boss: "Grand Widow Faerlina",
              url: 'grand-widow-faerlina'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/maexxna.jpg',
              boss:"Maexxna",
              url: 'maexxna'
            }
          ]
        },
        {
          wing_title: "The Plague Quarter",
          url: "the-plague-quarter",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/noth-the-plaguebringer.jpg',
              boss: "Noth the Plaguebringer",
              url: 'noth-the-plaguebringer'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/heigan-the-unclean.jpg',
              boss: "Heigan the Unclean",
              url: 'heigan-the-unclean'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/loatheb.jpg',
              boss: "Loatheb",
              url: 'loatheb'
            }
          ]
        },
        {
          wing_title: "The Military Quarter",
          url: 'the-military-quarter',
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/instructor-razuvious.jpg',
              boss: "Instructor Razuvious",
              url: 'instructor-razuvious'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/gothik-the-harvester.jpg',
              boss: "Gothik the Harvester",
              url: 'gothik-the-harvester'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/the-four-horsemen.jpg',
              boss: "The Four Horsemen",
              url: 'the-four-horsemen'
            }
          ]
        },
        {
          wing_title: "The Construct Quarter",
          url: 'the-construct-quarter',
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/patchwerk.jpg',
              boss: "Patchwerk",
              url: 'patchwerk'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/grobbulus.jpg',
              boss: "Grobbulus",
              url: 'grobbulus'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/gluth.jpg',
              boss: "Gluth",
              url: 'gluth'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/thaddius.jpg',
              boss: "Thaddius",
              url: 'thaddius'
            }
          ]
        },
        {
          wing_title: "Frostwyrm Lair",
          url: 'frostwyrm-lair',
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/sapphiron.jpg',
              boss: "Sapphiron",
              url: 'sapphiron'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/kel-thuzad.jpg',
              boss: "Kel'Thuzad",
              url: 'kel-thuzad'
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
      class_challanges: 9,
      class_challanges_details: "Każde wyzwanie klasowe ma nagrodę w postaci jednej karty klasowej (2 kopie)."
    },
    class_challanges: [
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
    bosses: {
      description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
      details: [
        {
          wing_title: "Blackrock Depths",
          url: 'blackrock-depths',
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/grim-guzzler.jpg',
              boss: "Grim Guzzler",
              url: 'grim-guzzler'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/dark-iron-arena.jpg',
              boss: "Dark Iron Arena",
              url: 'dark-iron-arena'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/emperor-thaurissan.jpg',
              boss:"Emperor Thaurissan",
              url: 'emperor-thaurissan'
            }
          ]
        },
        {
          wing_title: "Molten Core",
          url: "molten-core",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/garr.jpg',
              boss: "Garr",
              url: 'garr'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/baron-geddon.jpg',
              boss: "Baron Geddon",
              url: 'baron-geddon'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/ragnaros.jpg',
              boss: "Ragnaros the Firelord",
              url: 'ragnaros-the-firelord'
            }
          ]
        },
        {
          wing_title: "Blackrock Spire",
          url: "blackrock-spire",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/highlord-omokk.jpg',
              boss: "Highlord Omokk",
              url: 'highlord-omokk'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/general-drakkisath.jpg',
              boss: "General Drakkisath",
              url: 'general-drakkisath'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/rend-blackhand.jpg',
              boss: "Rend Blackhand",
              url: "rend-blackhand"
            }
          ]
        },
        {
          wing_title: "Blackwing Lair",
          url: "blackwing-lair",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/razorgore.jpg',
              boss: "Razorgore the Untamed",
              url: 'razorgore-the-untamed'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/vaelastrasz.jpg',
              boss: "Vaelastrasz the Corrupt",
              url: 'vaelastrasz-the-corrupt'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/chromaggus.jpg',
              boss: "Chromaggus",
              url: 'chromaggus'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/nefarius.jpg',
              boss: "Lord Victor Nefarius",
              url: 'lord-victor-nefarius'
            }
          ]
        },
        {
          wing_title: "Hidden Laboratory",
          url: "hidden-laboratory",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/omnotron.jpg',
              boss: "Omnotron Defense System",
              url: 'omnotron-defense-system'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/maloriak.jpg',
              boss: "Maloriak",
              url: 'maloriak'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/atramedes.jpg',
              boss: "Atramedes",
              url: 'atramedes'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/nefarian.jpg',
              boss: "Nefarian",
              url: 'nefarian'
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
      class_challanges: 9,
      class_challanges_details: "Każde wyzwanie klasowe ma nagrodę w postaci jednej karty klasowej (2 kopie)."
    },
    class_challanges: [
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
    bosses: {
      description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
      details: [
        {
          wing_title: "Świątynia Ozyrysa",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/temple-of-osiris/zinaar.jpg',
              boss: "Zinaar",
              url: 'zinaar'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/temple-of-osiris/sun-raider-phaerix.jpg',
              boss: "Słoneczny Grabieżca Faeriks",
              url: 'sloneczny-grabiezca-faeriks'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/temple-of-osiris/temple-escape.jpg',
              boss:"Ucieczka ze świątyni",
              url: 'ucieczka-ze-swiatyni'
            }
          ]
        },
        {
          wing_title: "Uldaman",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/uldaman/chieftain-scarvash.jpg',
              boss: "Wódz Skarwosz",
              url: 'wodz-skarwosz'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/uldaman/mine-cart-rush.jpg',
              boss: "Wagonik Górniczy",
              url: 'wagonik-gorniczy'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/uldaman/archaedas.jpg',
              boss: "Archaedas",
              url: 'archaedas'
            }
          ]
        },
        {
          wing_title: "Zrójnowane Miasto",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/the-ruined-city/lord-slitherspear.jpg',
              boss: "Lord Ślizgodzid",
              url: 'lord-slizgodzid'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/the-ruined-city/giantfin.jpg',
              boss: "Wielkopłetw",
              url: 'wielkopletw'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/the-ruined-city/lady-naz-jar.jpg',
              boss: "Lady Naz'Jar",
              url: 'lady-nazjar'
            }
          ]
        },
        {
          wing_title: "Sala Odkrywców",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/hall-of-explorers/skelesaurus-hex.jpg',
              boss: "Szkielezaurus Hex",
              url: 'szhielezaurus-hex'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/hall-of-explorers/the-steel-sentinel.jpg',
              boss: "Stalowy Wartownik",
              url: 'stalowy-wartownik'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/hall-of-explorers/arch-thief-rafaam.jpg',
              boss: "Arcyzłodziej Rafaam",
              url: 'arcyzlodziej-rafaam'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/the-league-of-explorers/hall-of-explorers/rafaam-unleashed.jpg',
              boss: "Wyzwolony Rafaam",
              url: 'wyzwolony-rafaam'
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
      class_challanges: 9,
      class_challanges_details: "Każde wyzwanie klasowe ma nagrodę w postaci jednej karty klasowej (2 kopie)."
    },
    class_challanges: [
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
    adventure: "one-night-at-karazhan",
    singular_adventure_name: "Pewnej Nocy w Karazhanie",
    plural_aventure_name: "Pewnej Nocy w Karazhanie",
    description: '',
    img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/home.expansion-slider/pewnej_nocy_w_karazhanie.jpg',
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
    bosses: {
      description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
      details: [
        {
          wing_title: "Iglica",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/spire/shade-of-aran.jpg',
              boss: "Widmo Arana",
              url: 'widmo-arana'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/spire/netherspite.jpg',
              boss: "Otchłarion",
              url: 'otchlarion'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/spire/free-medivh.jpg',
              boss: "Uwolnij Medivha!",
              url: 'uwolnij-medivha'
            }
          ]
        },
        {
          wing_title: "Menażeria",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/menagerie/curator.jpg',
              boss: "Kustosz",
              url: 'kustosz'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/menagerie/nightbane.jpg',
              boss: "Pożeracz Nocy",
              url: 'pozeracz-nocy'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/menagerie/terestian-illhoof.jpg',
              boss: "Terestian Podłokopytny",
              url: 'terestian-podlokopytny'
            }
          ]
        },
        {
          wing_title: "Opera",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/opera/julianne.jpg',
              boss: "Juliana",
              url: 'juliana'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/opera/big-bad-wolf.jpg',
              boss: "Wielki Zły Wilk",
              url: 'wielki-zly-wilk'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/opera/the-crone.jpg',
              boss: "Jędza",
              url: 'jedza'
            }
          ]
        },
        {
          wing_title: "Salon",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/parlor/silverware-golem.jpg',
              boss: "Sztućcowy Golem",
              url: 'sztuccowy-golem'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/parlor/magic-mirror.jpg',
              boss: "Magiczne Zwierciadło",
              url: 'magiczne-zwierciadlo'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/parlor/chess.jpg',
              boss: "Szachy",
              url: 'szachy'
            }
          ]
        },
        {
          wing_title: "Prolog",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/one-night-at-karazhan/prologue/an-uninvited-guest.jpg',
              boss: 'Nieproszony Gość',
              url: 'nieproszony-gosc'
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
      class_challanges: 9,
      class_challanges_details: "Każde wyzwanie klasowe ma nagrodę w postaci jednej karty klasowej (2 kopie)."
    },
    class_challanges: [
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