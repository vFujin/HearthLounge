import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import home from './home';
import patch from './current-hs-patch';
import entry from './entry/entry'
import users from './users';
import cards from './cards';
import issues from './issues';
import expansions from './expansions/expansions';
import adventures from './adventures/adventure'
import deckDetails from './create-deck/deck-options';
import deckCreation from './create-deck/create-deck';
import deckList from './decks/decks';
import {tools, activeDeck, deckAuthor} from './deck-view';
import redditPosts from './reddit/posts'


const rootReducer = combineReducers({
  home,
  patch,
  entry,
  users,
  cards,
  expansions,
  adventures,
  deckDetails,
  deckCreation,
  deckList,
  deckView: combineReducers({
    tools,
    activeDeck,
    deckAuthor
  }),
  redditPosts,
  issues,
  routing: routerReducer
});


export default rootReducer;