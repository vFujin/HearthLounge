export const topbar_tabs = [
  {
    en_url: 'cards',
    tab: 'Karty',
    url: 'karty'

  },
  {
    en_url: 'cost',
    tab: 'Koszt',
    url: 'koszt'
  },
  {
    en_url: 'structure',
    tab: 'Struktura',
    url: 'struktura'
  },
  {
    en_url: 'bosses',
    tab: 'Bossy',
    url: 'bossy'
  },
  {
    en_url: 'class-challanges',
    tab: 'Wyzwania Klasowe',
    url: 'wyzwania-klasowe'
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
          wing_title: "Rewir Arachnidów",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/arachnid/anub-rekhan.jpg',
              boss: "Anub'Rekhan",
              url: 'anubrekhan'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/arachnid/faerlina.jpg',
              boss: "Wielka Wdowa Ferlina",
              url: 'wielka-wdowa-ferlina'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/arachnid/maexxna.jpg',
              boss:"Maexxna",
              url: 'maexxna'
            }
          ]
        },
        {
          wing_title: "Rewir Zarazy",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/plague/noth.jpg',
              boss: "Nicz Siewca Zarazy",
              url: 'nicz-siewca-zarazy'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/plague/heigan.jpg',
              boss: "Heigan Nieczysty",
              url: 'heigan-nieczysty'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/plague/loatheb.jpg',
              boss: "Ohydziarz",
              url: 'ohydziarz'
            }
          ]
        },
        {
          wing_title: "Rewir Zbrojnych",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/military/razuvious.jpg',
              boss: "Instruktor Razuwiusz",
              url: 'instruktor-razuwiusz'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/military/gothik.jpg',
              boss: "Gotyk Żniwiarz",
              url: 'gotyk-zwniwiarz'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/military/rivendare.jpg',
              boss: "Czterech Jeźdźców",
              url: 'czterech-jezdzcow'
            }
          ]
        },
        {
          wing_title: "Rewir Konstruktorów",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/patchwerk.jpg',
              boss: "Łacior",
              url: 'lacior'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/grobbulus.jpg',
              boss: "Grobulus",
              url: 'grobulus'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/gluth.jpg',
              boss: "Glut",
              url: 'glut'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/thaddius.jpg',
              boss: "Thadius",
              url: 'thadius'
            }
          ]
        },
        {
          wing_title: "Leże Żmija Mrozu",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/frostwyrm-lair/sapphiron.jpg',
              boss: "Szafiron",
              url: 'szafiron'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/frostwyrm-lair/kel-thuzad.jpg',
              boss: "Kel'Thuzad",
              url: 'kelthuzad'
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
    img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/home.expansion-slider/czarna_gora.jpg',
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
          wing_title: "Otchłań Czarnej Góry",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/blackrock-depths/grim-guzzler.jpg',
              boss: "Ponury Opój",
              url: 'ponury-opoj'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/blackrock-depths/dark-iron-arena.jpg',
              boss: "Arena Czarnorytnych",
              url: 'arena-czarnorytnych'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/blackrock-depths/emperor-thaurissan.jpg',
              boss:"Imperator Thaurissan",
              url: 'imperator-thaurissan'
            }
          ]
        },
        {
          wing_title: "Ognista Czeluść",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/molten-core/garr.jpg',
              boss: "Garr",
              url: 'garr'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/molten-core/baron-geddon.jpg',
              boss: "Baron Geddon",
              url: 'baron-geddon'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/molten-core/ragnaros.jpg',
              boss: "Ragnaros Władca Ognia",
              url: 'ragnaros-wladca-ognia'
            }
          ]
        },
        {
          wing_title: "Iglica Czarnej Góry",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/blackrock-spire/highlord-omokk.jpg',
              boss: "Nadzorca Omokk",
              url: 'nadzorca-omokk'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/blackrock-spire/general-drakkisath.jpg',
              boss: "Generał Drakkisat",
              url: 'general-drakkisat'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/blackrock-spire/rend-blackhand.jpg',
              boss: "Rwij Czarnoręki",
              url: 'rwij-czarnoreki'
            }
          ]
        },
        {
          wing_title: "Leże Czarnoskrzydłego",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/blackwing-lair/razorgore.jpg',
              boss: "Brzytworóg Nieokiełznany",
              url: 'brzytworog-nieokielznany'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/blackwing-lair/vaelastrasz.jpg',
              boss: "Vaelastraz Plugawy",
              url: 'vaelastraz-plugawy'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/blackwing-lair/chromaggus.jpg',
              boss: "Chromagus",
              url: 'chromagus'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/blackwing-lair/nefarius.jpg',
              boss: "Lord Viktor Nefarius",
              url: 'lord-viktor-nefarius'
            }
          ]
        },
        {
          wing_title: "Ukryte Laboratorium",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/hidden-laboratory/omnotron.jpg',
              boss: "Omnotron",
              url: 'omnotron'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/hidden-laboratory/maloriak.jpg',
              boss: "Maloriak",
              url: 'maloriak'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/hidden-laboratory/atramedes.jpg',
              boss: "Atramedes",
              url: 'atramedes'
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/blackrock-mountain/hidden-laboratory/nefarian.jpg',
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