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
              boss: "Anub'Rekhan"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/arachnid/faerlina.jpg',
              boss: "Wielka Wdowa Ferlina"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/arachnid/maexxna.jpg',
              boss:"Maexxna"
            }
          ]
        },
        {
          wing_title: "Rewir Zarazy",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/plague/noth.jpg',
              boss: "Nicz Siewca Zarazy"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/plague/heigan.jpg',
              boss: "Heigan Nieczysty"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/plague/loatheb.jpg',
              boss: "Ohydziarz"
            }
          ]
        },
        {
          wing_title: "Rewir Zbrojnych",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/military/razuvious.jpg',
              boss: "Instruktor Razuwiusz"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/military/gothik.jpg',
              boss: "Gotyk Żniwiarz"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/military/rivendare.jpg',
              boss: "Czterech Jeźdźców"
            }
          ]
        },
        {
          wing_title: "Rewir Konstruktorów",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/patchwerk.jpg',
              boss: "Łacior"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/grobbulus.jpg',
              boss: "Grobulus"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/gluth.jpg',
              boss: "Glut"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/thaddius.jpg',
              boss: "Thadius"
            }
          ]
        },
        {
          wing_title: "Leże Żmija Mrozu",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/frostwyrm-lair/sapphiron.jpg',
              boss: "Szafiron"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/frostwyrm-lair/kel-thuzad.jpg',
              boss: "Kel'Thuzad"
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
    description: 'Czarna góra jest cztero skrzydłową przygodą, gdzie każde skrzydło reprezentuje osobne skrzydło z instancji Blackrock w World of Warcraft. Gracz pokonując skrzydła może dostać 30 nowych kart dodanych w tej przygodzie.',
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
          wing_title: "Otchłań Czarnej Góry",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/arachnid/anub-rekhan.jpg',
              boss: "Ponury Opój"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/arachnid/faerlina.jpg',
              boss: "Arena Czarnorytnych"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/arachnid/maexxna.jpg',
              boss:"Imperator Thaurissan"
            }
          ]
        },
        {
          wing_title: "Ognista Czeluść",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/plague/noth.jpg',
              boss: "Garr"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/plague/heigan.jpg',
              boss: "Baron Geddon"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/plague/loatheb.jpg',
              boss: "Ragnaros Władca Ognia"
            }
          ]
        },
        {
          wing_title: "Iglica Czarnej Góry",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/military/razuvious.jpg',
              boss: "Nadzorca Omokk"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/military/gothik.jpg',
              boss: "Generał Drakkisat"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/military/rivendare.jpg',
              boss: "Rwij Czarnoręki"
            }
          ]
        },
        {
          wing_title: "Leże Czarnoskrzydłego",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/patchwerk.jpg',
              boss: "Brzytworóg Nieokiełznany"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/grobbulus.jpg',
              boss: "Vaelastraz Plugawy"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/gluth.jpg',
              boss: "Chromagus"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/construct/thaddius.jpg',
              boss: "Lord Viktor Nefarius"
            }
          ]
        },
        {
          wing_title: "Ukryte Laboratorium",
          bosses: [
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/frostwyrm-lair/sapphiron.jpg',
              boss: "Omnotron"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/frostwyrm-lair/kel-thuzad.jpg',
              boss: "Maloriak"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/frostwyrm-lair/kel-thuzad.jpg',
              boss: "Atramedes"
            },
            {
              img: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/curse-of-naxxramas/frostwyrm-lair/kel-thuzad.jpg',
              boss: "Nefarian"
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
  }
];