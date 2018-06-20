import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router';
import history from '../globals/history';
import Loadable from 'react-loadable';
import PageLoader from "../components/loaders/page/page-loader";
import Home from './pages/home/home';
import Deck from './pages/decks/deck/deck';
import RedditPost from './pages/reddit/post/post';
import CreateDeckClassSelection  from './pages/create-deck/before-class-selection/class-selection';
import CreateDeckClassSelected  from './pages/create-deck/after-class-selection/create-deck';
import CreateDeckClassSelectedMobile from './pages/create-deck/after-class-selection/create-deck-mobile/create-deck-mobile';
import {extensionExists} from "../utils/checkIfPathExist";
import NotFound from "../components/not-found/not-found";

const AsyncDeckSelection = Loadable({
  loader: () => import('./pages/decks/deck-selection/deck-selection'),
  loading: PageLoader
});

const AsyncCards = Loadable({
  loader: ()=>import('./pages/cards/cards'),
  loading: PageLoader
});

const AsyncExtensions = Loadable({
  loader: ()=>import('./pages/extensions/extensions'),
  loading: PageLoader
});

const AsyncSelectExtension = Loadable({
  loader: ()=>import('./pages/extensions/select-extension'),
  loading: PageLoader
});

const AsyncRedditPosts = Loadable({
  loader: ()=>import('./pages/reddit/posts/posts'),
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

const AsyncStreams = Loadable({
  loader: ()=>import('./pages/streams/streams'),
  loading: PageLoader
});

const AsyncStreamer = Loadable({
  loader: ()=>import('./pages/streams/streamer/streamer'),
  loading: PageLoader
});

const AsyncMiscellaneous = Loadable({
  loader: ()=>import('./pages/miscellaneous/container'),
  loading: PageLoader
});

const AsyncWelcome = Loadable({
  loader: ()=>import('./pages/welcome/welcome'),
  loading: PageLoader
});

const AsyncNotFound = Loadable({
  loader: ()=>import('../components/not-found/not-found'),
  loading: PageLoader
});

const Routes = ({route, mobileMenuActive, windowWidth}) => {


  const validatePlayerClass = ({playerClass}) => {
    if(localStorage.hearthloungeGameInfo) {
      const notStandardPlayerClasses = ["Neutral", "Dream", "Death Knight"];
      const standardPlayerClasses = JSON.parse(localStorage.hearthloungeGameInfo).classes;
      const filterPlayerClasses = standardPlayerClasses.filter(pc => !notStandardPlayerClasses.includes(pc)).map(pc => pc.toLowerCase());
      const playerClassExist = filterPlayerClasses.includes(playerClass);

      if (playerClassExist) {
        return windowWidth >= 816
          ? <CreateDeckClassSelected playerClass={playerClass}/>
          : <CreateDeckClassSelectedMobile playerClass={playerClass}/>
      }
      else return <AsyncNotFound page={playerClass}/>;
    } else {
      history.push('/create-deck');
      return <CreateDeckClassSelection/>;
    }
  };

  return (
    <div className={mobileMenuActive ? "switch__wrapper--mobileMenuActive" : undefined} style={{overflow: "auto"}}>
        <Switch>
          <Route exact path="/"                   component={Home} />
          <Route exact path="/decks"              component={AsyncDeckSelection} />
          <Route path="/decks/:deckId/:deckTitle" component={Deck}/>
          <Route path="/cards"                    component={AsyncCards} />
          <Route exact path="/extensions"         component={AsyncSelectExtension} />
          <Route path="/extensions/:extension/:details"    render={routeObj =>
            extensionExists(routeObj.match.params.extension)
              ? <AsyncExtensions routeObj={routeObj}/>
              : <NotFound page={routeObj.match.params.extension}/>
          } />

          <Route exact path="/create-deck"        component={CreateDeckClassSelection} />
          <Route path="/create-deck/:playerClass" render={routeObj => validatePlayerClass(routeObj.match.params)} />
          <Route path="/streamers"                component={AsyncStreams} />
          <Route path="/streamers/:streamer"      component={AsyncStreamer} />
          <Route exact path="/reddit"             component={AsyncRedditPosts} />
          <Route path="/reddit/post/:postId"      component={RedditPost} />
          <Route path="/tournaments"              component={AsyncTournaments} />
          <Route path="/sign-in"                  component={AsyncEntry} />
          <Route path="/sign-up"                  component={AsyncEntry} />
          <Route path="/dashboard"                component={AsyncDashboard} />
          <Route path="/welcome"                  component={AsyncWelcome} />
          <Route path="/:misc"                    component={AsyncMiscellaneous} />
          <Route path="*"                         component={AsyncNotFound} />
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
