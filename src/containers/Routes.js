import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router';
import history from '../globals/history';
import Loadable from 'react-loadable';
import PageLoader from "../components/loaders/page/page-loader";

const AsyncHome = Loadable({
  loader: () => import('./pages/home/home'),
  loading: PageLoader
});

const AsyncDeckSelection = Loadable({
  loader: () => import('./pages/decks/deck-selection/deck-selection'),
  loading: PageLoader
});

const AsyncDeck = Loadable({
  loader: ()=>import('./pages/decks/deck/deck'),
  loading: PageLoader
});

const AsyncCards = Loadable({
  loader: ()=>import('./pages/cards/cards'),
  loading: PageLoader
});

const AsyncExpansions = Loadable({
  loader: ()=>import('./pages/expansions/expansions'),
  loading: PageLoader
});

const AsyncAdventures = Loadable({
  loader: ()=>import('./pages/adventures/adventures'),
  loading: PageLoader
});

const AsyncCreateDeckClassSelection = Loadable({
  loader: ()=>import('./pages/create-deck/before-class-selection/class-selection'),
  loading: PageLoader
});

const AsyncCreateDeckClassSelected = Loadable({
  loader: ()=>import('./pages/create-deck/after-class-selection/create-deck'),
  loading: PageLoader
});

const AsyncCreateDeckClassSelectedMobile = Loadable({
  loader: ()=>import('./pages/create-deck/after-class-selection/create-deck-mobile/create-deck-mobile'),
  loading: PageLoader
});

const AsyncRedditPosts = Loadable({
  loader: ()=>import('./pages/reddit/posts/posts'),
  loading: PageLoader
});

const AsyncRedditPost = Loadable({
  loader: ()=>import('./pages/reddit/post/post'),
  loading: PageLoader
});

const AsyncTournaments = Loadable({
  loader: ()=>import('./pages/tournaments/tournaments'),
  loading: PageLoader
});

const AsyncEntry = Loadable({
  loader: ()=>import('./pages/entry/entry'),
  loading: PageLoader
});

const AsyncDashboard = Loadable({
  loader: ()=>import('./pages/dashboard/dashboard'),
  loading: PageLoader
});

const AsyncMiscellaneous = Loadable({
  loader: ()=>import('./pages/miscellaneous/container'),
  loading: PageLoader
});

const AsyncNotFound = Loadable({
  loader: ()=>import('../components/not-found/not-found'),
  loading: PageLoader
});

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