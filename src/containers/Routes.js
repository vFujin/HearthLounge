import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router';
import history from '../globals/history';
import asyncComponent from "../components/async-component";

const AsyncHome = asyncComponent(() => import('./pages/home/home'));
const AsyncDeckSelection = asyncComponent(() => import('./pages/decks/deck-selection/deck-selection'));
const AsyncDeck = asyncComponent(()=>import('./pages/decks/deck/deck'));
const AsyncCards = asyncComponent(()=>import('./pages/cards/cards'));
const AsyncExpansions = asyncComponent(()=>import('./pages/expansions/expansions'));
const AsyncAdventures = asyncComponent(()=>import('./pages/adventures/adventures'));
const AsyncCreateDeckClassSelection = asyncComponent(()=>import('./pages/create-deck/before-class-selection/class-selection'));
const AsyncCreateDeckClassSelected = asyncComponent(()=>import('./pages/create-deck/after-class-selection/create-deck'));
const AsyncCreateDeckClassSelectedMobile = asyncComponent(()=>import('./pages/create-deck/after-class-selection/create-deck-mobile/create-deck-mobile'));
const AsyncRedditPosts = asyncComponent(()=>import('./pages/reddit/posts/posts'));
const AsyncRedditPost = asyncComponent(()=>import('./pages/reddit/post/post'));
const AsyncTournaments = asyncComponent(()=>import('./pages/tournaments/tournaments'));
const AsyncEntry = asyncComponent(()=>import('./pages/entry/entry'));
const AsyncDashboard = asyncComponent(()=>import('./pages/dashboard/dashboard'));
const AsyncMiscellaneous = asyncComponent(()=>import('./pages/miscellaneous/container'));
const AsyncNotFound = asyncComponent(()=>import('../components/not-found/not-found'));


const Routes = ({mobileMenuActive, windowWidth}) => {

  const validatePlayerClass = ({playerClass}) => {
    if(localStorage.hearthloungeGameInfo) {
      const notStandardPlayerClasses = ["Neutral", "Dream", "Death Knight"];
      const standardPlayerClasses = JSON.parse(localStorage.hearthloungeGameInfo).classes;
      const filterPlayerClasses = standardPlayerClasses.filter(pc => !notStandardPlayerClasses.includes(pc)).map(pc => pc.toLowerCase());
      const playerClassExist = filterPlayerClasses.includes(playerClass);

      if (playerClassExist) {
        return windowWidth >= 816
          ? <AsyncCreateDeckClassSelected playerClass={playerClass}/>
          : <AsyncCreateDeckClassSelectedMobile playerClass={playerClass}/>
      }
      else return <AsyncNotFound page={playerClass}/>;
    } else {
      history.push('/create-deck');
      return <AsyncCreateDeckClassSelection/>;
    }
  };

  return (
    <div className={mobileMenuActive ? "switch__wrapper--mobileMenuActive" : undefined}>
      <Switch>
        <Route exact path="/"                   component={AsyncHome} />
        <Route exact path="/decks"              component={AsyncDeckSelection} />
        <Route path="/decks/:deckId/:deckTitle" component={AsyncDeck}/>
        <Route path="/cards"                    component={AsyncCards} />
        <Route path="/expansions"               component={AsyncExpansions}/>
        <Route path="/adventures"               component={AsyncAdventures} />
        <Route exact path="/create-deck"        component={AsyncCreateDeckClassSelection} />
        <Route path="/create-deck/:playerClass" render={routeObj => validatePlayerClass(routeObj.match.params)} />
        <Route exact path="/reddit"             component={AsyncRedditPosts} />
        <Route path="/reddit/post/:postId"      component={AsyncRedditPost} />
        <Route path="/tournaments"              component={AsyncTournaments} />
        <Route path="/sign-in"                  component={AsyncEntry} />
        <Route path="/sign-up"                  component={AsyncEntry} />
        <Route path="/dashboard"                component={AsyncDashboard} />
        <Route path="/:misc"                    component={AsyncMiscellaneous} />
        <Route path="*"                         component={AsyncNotFound} />
        {/*/!*<Redirect from="twitch" to="twitch/all" />*!/*/}
        {/*/!*<Route path="twitch"         component={Streams}>*!/*/}
        {/*/!*<Route path=":channel"     component={Iframe}/>*!/*/}
        {/*/!*</Route>*!/*/}
      </Switch>
    </div>
  )
};

Routes.propTypes = {
  mobileMenuActive: PropTypes.bool.isRequired,
  windowWidth: PropTypes.number.isRequired
};

Routes.defaultProptypes = {
  mobileMenuActive: false
};

export default Routes;