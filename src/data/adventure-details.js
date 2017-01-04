export const adventure_details = [
    {
        adventure: "curse-of-naxxramas",
        cost: {
            description: "Przygoda Klątwa Naxxramas jest dodatkową płatną zawartością do Hearthsone'a. Jest możliwość kupna zawartości za pomocą zdobytego w grze złota oraz prawdziwej gotówki." +
            "Przygoda jest podzielona na 5 skrzydeł; każde skrzydło kosztuje 700 złota lub 5.99 euro (~25zł, w zależności od kursu Euro). Kupując całą przygodę (wszystkie skrzydła), koszt jednego skrzydła" +
            "wynosi 5 euro (~20zł, w zależności od kursu Euro). Poniżej przedstawiona jest tabela kosztu przygody Klątwy Naxxramas. PS. W grze nie można kupić całej przygody za pomocą złota, lecz zaprezentowaliśmy" +
            "sumę złota tylko i wyłącznie w celu porównania cen.",
            one_wing: {
                gold: 700,
                eur: 5.99,
                pln: 25.19
            },
            two_wings: {
                gold: 1400,
                eur: 8.99,
                pln: 37.75
            },
            three_wings: {
                gold: 2100,
                eur: 13.99,
                pln: 58.75
            },
            four_wings: {
                gold: 2800,
                eur: 17.99,
                pln: 75.55
            },
            five_wings: {
                gold: 3500,
                eur: 21.99,
                pln: 92.35
            }
        },
        bosses: {
            description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
            details: [
                {
                    wing_title: "Rewir Arachnidów",
                    bosses: ["Anub'Rekhan", "Wielka Wdowa Ferlina", "Maexxna"]
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
                "Każde skrzydło jest udostępniane"
            ],
            bosses_amount: 15,
            class_challanges: 9,
            class_challanges_details: "Każde wyzwanie klasowe ma nagrodę w postaci jednej karty klasowej (2 kopie)."
        },
        class_challanges: {
            druid: {
                card_reward: "Mounted Raptor"
            },
            hunter: {
                card_reward: "Dart Trap"
            },
            mage: {
                card_reward: "Animated Armor"
            },
            paladin: {
                card_reward: "Keeper of Uldaman"
            },
            priest: {
                card_reward: "Entomb"
            },
            rogue: {
                card_reward: "Tomb Pillager"
            },
            shaman: {
                card_reward: "Everyfin is Awesome"
            },
            warlock: {
                card_reward: "Dark Peddler"
            },
            warrior: {
                card_reward: "Obsidian Destroyer"
            }
        },
        cards: {
            card_amount: 30
        }
    }
];

export const blackrock_mountain = {
    cost: {
        description: "Przygoda Klątwa Naxxramas jest dodatkową płatną zawartością do Hearthsone'a. Jest możliwość kupna zawartości za pomocą zdobytego w grze złota oraz prawdziwej gotówki." +
        "Przygoda jest podzielona na 5 skrzydeł; każde skrzydło kosztuje 700 złota lub 5.99 euro (~25zł, w zależności od kursu Euro). Kupując całą przygodę (wszystkie skrzydła), koszt jednego skrzydła" +
        "wynosi 5 euro (~20zł, w zależności od kursu Euro). Poniżej przedstawiona jest tabela kosztu przygody Klątwy Naxxramas. PS. W grze nie można kupić całej przygody za pomocą złota, lecz zaprezentowaliśmy" +
        "sumę złota tylko i wyłącznie w celu porównania cen.",
        one_wing: {
            gold: 700,
            eur: 5.99,
            pln: 25.19
        },
        two_wings: {
            gold: 1400,
            eur: 8.99,
            pln: 37.75
        },
        three_wings: {
            gold: 2100,
            eur: 13.99,
            pln: 58.75
        },
        four_wings: {
            gold: 2800,
            eur: 17.99,
            pln: 75.55
        },
        five_wings: {
            gold: 3500,
            eur: 21.99,
            pln: 92.35
        }
    },
    bosses: {
        description: "Szczegółowe informacje, poradniki, karty do odblokowania po pokonaniu bossa oraz najlepsze talie kart do pokonania bossa znajdują się po kliknięciu na danego bossa.",
        details: [
            {
                wing_title: "Rewir Arachnidów",
                bosses: ["Anub'Rekhan", "Wielka Wdowa Ferlina", "Maexxna"]
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
            "Każde skrzydło jest udostępniane"
        ],
        bosses_amount: 15,
        class_challanges: 9,
        class_challanges_details: "Każde wyzwanie klasowe ma nagrodę w postaci jednej karty klasowej (2 kopie)."
    },
    class_challanges: {
        druid: {
            card_reward: "Mounted Raptor"
        },
        hunter: {
            card_reward: "Dart Trap"
        },
        mage: {
            card_reward: "Animated Armor"
        },
        paladin: {
            card_reward: "Keeper of Uldaman"
        },
        priest: {
            card_reward: "Entomb"
        },
        rogue: {
            card_reward: "Tomb Pillager"
        },
        shaman: {
            card_reward: "Everyfin is Awesome"
        },
        warlock: {
            card_reward: "Dark Peddler"
        },
        warrior: {
            card_reward: "Obsidian Destroyer"
        }
    },
    cards: {
        card_amount: 30
    }
};