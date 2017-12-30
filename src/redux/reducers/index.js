import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import info from '../game-info/reducer';
import entry from './entry/entry'
import activeUser from './users';
import cards from '../cards/reducer';
import cardbacks from '../cardbacks/reducer';
import issues from './issues';
import expansions from './expansions/expansions';
import adventures from './adventures/adventure'
import deckDetails from './create-deck/deck-options';
import deckCreation from './create-deck/create-deck';
import {
  tools, activeDeck, activeDeckCopy, deckAuthor,
  activeDeckEditing,
  deckComments,
  deckCommentPostingStatus,
  deckCommentDeletingStatus, deckDeletion
} from '../deck/reducers';
import {decks, hotDecks, updateDecks} from '../decks/reducers';
import {posts, activePost} from '../reddit/reducers';
import {activeUserDecks, shortenedUserDetails} from "../user/reducers";

const rootReducer = combineReducers({
  home: combineReducers({
    hotDecks
  }),
  info,
  entry,
  users: combineReducers({
    activeUser,
    activeUserDecks
  }),
  cardbacks,
  cards,
  expansions,
  adventures,
  deckDetails,
  deckCreation,
  decks: combineReducers({
    decks,
    updateDecks
  }),
  deckView: combineReducers({
    tools,
    activeDeck,
    activeDeckCopy,
    deckAuthor,
    shortenedUserDetails,
    activeDeckEditing,
    deckComments,
    deckCommentPostingStatus,
    deckCommentDeletingStatus,
    deckDeletion
  }),
  redditPosts: combineReducers({
    posts,
    activePost
  }),
  issues,
  router: routerReducer
});


export default rootReducer;