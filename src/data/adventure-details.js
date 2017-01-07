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
          wing_pic: "",
          wing_title: "Rewir Arachnidów",
          bosses: [
            {
              boss_img: '',
              boss: "Anub'Rekhan"
            },
            {
              boss_img: '',
              boss: "Wielka Wdowa Ferlina"
            },
            {
              boss_img: '',
              boss:"Maexxna"
            }
          ]
        },
        {
          wing_title: "Rewir Zarazy",
          bosses: ["Nicz Siewca Zarazy", "Heigan Nieczysty", "Ohydziarz"]
        },
        {
          wing_title: "Rewir Zbrojnych",
          bosses: ["Instruktor Razuwiusz", "Gotyk Żniwiarz", "Czterech Jeźdźców"]
        },
        {
          wing_title: "Rewir Konstruktorów",
          bosses: ["Łacior", "Grobulus", "Glut", "Thadius"]
        },
        {
          wing_title: "Leże Żmija Mrozu",
          bosses: ["Szafiron", "Kel'Thuzad"]
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
      card_amount: 30
    }
  }
];