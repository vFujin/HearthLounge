import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router';
import Deck from "./pages/decks/deck/deck";
import CreateDeckClassSelection from "./pages/create-deck/before-class-selection/class-selection";
import CreateDeckClassSelected from "./pages/create-deck/after-class-selection/create-deck";
import CreateDeckClassSelectedMobile from "./pages/create-deck/after-class-selection/create-deck-mobile/create-deck-mobile";
import Dashboard from "./pages/dashboard/dashboard";
import RedditPost from "./pages/reddit/post/post";
import Cards from "./pages/cards/cards";
import Expansions from "./pages/expansions/expansions";
import Entry from "./pages/entry/entry";
import Home from "./pages/home/home";
import Adventures from "./pages/adventures/adventures";
import {Tournaments} from "./pages/tournaments/tournaments";
import Calendar from "../components/calendar/calendar";
import DeckSelection from "./pages/decks/deck-selection/deck-selection";
import Miscellaneous from "./pages/miscellaneous/container";
import RedditPosts from "./pages/reddit/posts/posts";
import NotFound from "../components/not-found/not-found";
import history from '../globals/history';

const Routes = ({mobileMenuActive, windowWidth}) => {

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
      else return <NotFound page={playerClass}/>;
    } else {
      history.push('/create-deck');
      return <CreateDeckClassSelection/>;
    }
  };

  return (
    <div className={mobileMenuActive ? "switch__wrapper--mobileMenuActive" : undefined}>
      <Switch>
        <Route exact path="/"                   component={Home} />
        <Route exact path="/decks"              component={DeckSelection} />
        <Route path="/decks/:deckId/:deckTitle" component={Deck}/>
        <Route path="/cards"                    component={Cards} />
        <Route path="/expansions"               component={Expansions}/>
        <Route path="/adventures"               component={Adventures} />
        <Route exact path="/create-deck"        component={CreateDeckClassSelection} />
        <Route path="/create-deck/:playerClass" render={routeObj => validatePlayerClass(routeObj.match.params)} />
        <Route path="/tournaments"              component={Tournaments} />
        <Route exact path="/reddit"             component={RedditPosts} />
        <Route path="/reddit/post/:postId"      component={RedditPost} />
        <Route path="/tournaments"              component={Calendar} />
        <Route path="/reddit/post/:postId"      component={RedditPost} />
        <Route path="/sign-in"                  component={Entry} />
        <Route path="/sign-up"                  component={Entry} />
        <Route path="/dashboard"                component={Dashboard} />
        <Route path="/:misc"                    component={Miscellaneous} />
        <Route path="*"                         component={NotFound} />
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