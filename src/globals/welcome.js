import DecksImg from '../images/welcome/decks.jpg';
import Deck1Img from '../images/welcome/deck.jpg';
import Deck2Img from '../images/welcome/deck2.jpg';
import CardsImg from '../images/welcome/cards.jpg';
import ExtensionsImg from '../images/welcome/extensions.jpg';
import CreateDeckImg from '../images/welcome/create-deck.jpg';
import CreateDeck2Img from '../images/welcome/create-deck2.jpg';
import TournamentsImg from '../images/welcome/tournaments.jpg';
import RedditPostsImg from '../images/welcome/reddit-posts.jpg';
import RedditPostImg from '../images/welcome/reddit-post.jpg';
import StreamsImg from '../images/welcome/streams.jpg';

export default [
  {
    page: 'decks',
    icon: 'deck',
    about: 'All decks created by our users in one place',
    img: [DecksImg],
    info: [
      {
        text: 'search for decks created by other users',
        implemented: false
      },
      {
        text: 'filter decks by class, mode, archetype, user, upvotes, views, comments and creation date',
        implemented: false
      },
      {
        text: 'instant deck page view after selecting deck',
        implemented: true
      }
    ],
  },
  {
    page: 'deck',
    icon: 'deck',
    about: 'Check the guide, check the decklist, check the comments. Everything you need to know about particular deck is right here.',
    img: [Deck1Img, Deck2Img],
    info: [
      {
        text: 'deck details, guide and comments in one view',
        implemented: true
      },
      {
        text: 'archetype and mana curve graph bar colors matching class colors',
        implemented: true
      },
      {
        text: 'decklist showing set, card name, amount of specific card, cost and fancy rarity background',
        implemented: true
      },
      {
        text: 'decklist filtered by class and non-class cards',
        implemented: false
      },
      {
        text: 'deck editing in the same view',
        implemented: true
      },
      {
        text: 'deckstring copy-to-clipboard with one click',
        implemented: true
      },
      {
        text: 'visible card image while hovering card in decklist',
        implemented: true
      },
      {
        text: 'deck author details snippet',
        implemented: true
      },
      {
        text: 'instantaneous commenting',
        implemented: true
      },
      {
        text: 'deck & comments voting system',
        implemented: false
      },
      {
        text: 'TL;DR patch information shown while hovering game version number',
        implemented: false
      }
    ]
  },
  {
    page: 'cards',
    icon: 'all-cards',
    about: 'YOU FACE.. yes, the Eredar Lord is here. So everyone get in here and explore all cards that are in the game!',
    img: [CardsImg],
    info: [
      {
        text: 'instantaneous card filtering by name, set, cost and many more',
        implemented: true
      },
      {
        text: 'load more cards while infinite scrolling',
        implemented: true
      },
      {
        text: 'see card details by clicking on card',
        implemented: false
      }
    ]
  },
  {
    page: 'extensions',
    icon: 'expansions',
    about: 'Good news everyone, because everything related to Hearthstone expansions and adventures as well as guides and boss strategies are here aswell!',
    img: [ExtensionsImg],
    info: [
      {
        text: 'extensions in one view',
        implemented: true
      },
      {
        text: 'short overview of the extension with pleasing to the eye sections',
        implemented: true
      },
      {
        text: 'see cards related specifically to selected extension',
        implemented: true
      },
      {
        text: 'boss guides & decks',
        implemented: true
      }
    ]
  },
  {
    page: 'create deck',
    icon: 'create-deck',
    about: "Deck Creation is easier than before with HearthLounge's Deck Creator!",
    img: [CreateDeckImg, CreateDeck2Img],
    info: [
      {
        text: 'create new deck or import existing one via deckstring',
        implemented: true,
      },
      {
        text: 'mana curve, decklist, deck mechanics and card types in one view',
        implemented: true
      },
      {
        text: 'deckstring copy-to-clipboard with one click',
        implemented: true
      },
      {
        text: 'save deck as image',
        implemented: false
      },
      {
        text: 'Want to make deck private instead? No problem!',
        implemented: true
      },
      {
        text: 'guide creation tool with preview',
        implemented: true
      },
      {
        text: 'add mulligans and alternative cards for decklist',
        implemented: false
      }
    ]
  },
  {
    page: 'tournaments',
    icon: 'trophy',
    about: "Always wanted to join a tournament but didn't know where to find it? Or maybe you wanted to watch a tournament but couldn't find any channels broadcasting them? We got you covered.",
    img: [TournamentsImg],
    info: [
      {
        text: 'tournaments shown this month',
        implemented: true
      },
      {
        text: 'tournaments happening today set to your timezone',
        implemented: true
      },
      {
        text: 'search for tournaments that are beeing live streamed',
        implemented: false
      },
      {
        text: 'create tournaments with our tournament creation tool',
        implemented: false
      },
      {
        text: 'search for tournaments, join them and win prizes',
        implemented: false
      },
      {
        text: 'search for tournaments nearby your location',
        implemented: false
      }
    ]
  },
  {
    page: 'streamers',
    icon: 'twitch',
    about: 'Looking for a player who shows THE REAL gameplay? Or maybe a tournament channel that is currently broadcasting? This is the page dedicated just for that.',
    img: [StreamsImg],
    info: [
      {
        text: 'filter broadcasters by class they are playing',
        implemented: false
      },
      {
        text: 'search for tournament channels if they are live broadcasting',
        implemented: false
      },
      {
        text: 'see top 10 broadcasters with highest amount of viewers',
        implemented: true
      },
      {
        text: 'see features broadcasters',
        implemented: false
      },
      {
        text: 'discover new hearthstone broadcasters',
        implemented: false
      }
    ]
  },
  {
    page: 'reddit',
    icon: 'reddit',
    about: 'Latest information about game, fresh memes, quality gameplay clips, top-notch RNG screenshots are right here, in subreddit dedicated just for Hearthstone',
    img: [RedditPostsImg, RedditPostImg],
    info: [
      {
        text: 'filter reddit posts by clips, tweets, images or blizzard announcements',
        implemented: true
      },
      {
        text: 'keeping with the heart of reddit, you can also filter posts by hot, top, new, rising and controversial',
        implemented: true
      },
      {
        text: 'instantaneous post load after selecting one in post list',
        implemented: true
      },
      {
        text: 'post details & comments in one view',
        implemented: true
      }
    ]
  }
]
