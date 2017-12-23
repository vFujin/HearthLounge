import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route, Redirect} from 'react-router';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import {getActiveUser} from '../firebase/user/read';
import {FETCH_PATCH_REQUEST} from "../redux/patch/types";
import {FIREBASE_SIGN_OUT_REQUEST} from "../redux/types/firebase";
import * as types from "../redux/cards/types";
import CreateDeckClassSelected from "./pages/create-deck/after-class-selection/create-deck";
import RedditPosts from "./pages/reddit/posts/posts";
import Deck from "./pages/decks/deck/deck";
import Expansions from "./pages/expansions/expansions";
import DeckSelection from "./pages/decks/deck-selection/deck-selection";
import NotFound from "./shared-assets/not-found";
import Adventures from "./pages/adventures/adventures";
import Reddit from "./pages/reddit/reddit";
import RedditPost from "./pages/reddit/post/post";
import {Tournaments} from "./pages/tournaments/tournaments";
import Dashboard from "./pages/dashboard/dashboard";
import Entry from "./pages/entry/entry";
import Home from "./pages/home/home";
import Cards from "./pages/cards/cards";
import Miscellaneous from "./pages/miscellaneous/container";
import CreateDeckClassSelection from "./pages/create-deck/before-class-selection/class-selection";
import 'antd/lib/tooltip/style/css';
import 'antd/lib/dropdown/style/css';
import 'antd/lib/popover/style/css';
import 'antd/lib/message/style/css';
import 'antd/lib/select/style/css';

class Main extends Component{
  handleSignOut = () =>{
    const {signOut} = this.props;
    signOut();
  };

  componentDidMount() {
    const {updateCurrentPatch, updateCards, updateActiveUser} = this.props;
    getActiveUser((authenticated, data) => updateActiveUser({authenticated, ...data}));
    updateCurrentPatch();
    updateCards();
  }

  render(){
    const {activeUser, playerClass, authenticated} = this.props;
    return (
      <BrowserRouter>
        <div id="container">
          <Navbar url="123"
                  activeUser={activeUser}
                  playerClass={playerClass}
                  handleSignOut={this.handleSignOut}/>
          <Switch>
            <Route exact path="/"                   component={Home} />
            <Route exact path="/decks"              component={DeckSelection} />
            <Route path="/decks/:deckId/:deckTitle" component={Deck}/>
            <Route path="/cards"                    component={Cards} />
            <Route path="/expansions"               component={Expansions}/>
            <Route path="/adventures"               component={Adventures} />
            <Route exact path="/create-deck"        component={CreateDeckClassSelection} />
            <Route path="/create-deck/:playerClass" component={CreateDeckClassSelected} />
            <Route path="/tournaments"              component={Tournaments} />
            <Route exact path="/reddit"             component={Reddit} />
            <Route exact path="/reddit/posts/:category"         component={RedditPosts} />
            <Route exact path="/reddit/posts/:category/:domain" component={RedditPosts} />
            <Route exact path="/reddit/post/:postId/:postTitle" component={RedditPost} />
            <Route path="/sign-in"                  component={Entry} />
            <Route path="/sign-up"                  component={Entry} />
            <Route path="/dashboard"                render={() => !authenticated ? <Redirect to="/sign-in" /> : <Dashboard />} />
            <Route path="/:misc"                    component={Miscellaneous} />
            <Route path="*"                         component={NotFound} />
          </Switch>

            {/*/!*<Redirect from="twitch" to="twitch/all" />*!/*/}
            {/*/!*<Route path="twitch"         component={Streams}>*!/*/}
            {/*/!*<Route path=":channel"     component={Iframe}/>*!/*/}
            {/*/!*</Route>*!/*/}

          <Footer pathname="123"/>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state =>{
  const {current} = state.patch;
  const {activeUser} = state.users;
  const {playerClass} = state.deckCreation;
  const {authenticated} = activeUser;
  return {current, authenticated, activeUser, playerClass};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentPatch: () => dispatch({type: FETCH_PATCH_REQUEST}),
    updateCards: () => dispatch({type: types.FETCH_CARDS_REQUEST}),
    updateActiveUser: (activeUser) => dispatch({
      type: 'UPDATE_ACTIVE_USER', payload: activeUser
    }),
    signOut: () => dispatch({type: FIREBASE_SIGN_OUT_REQUEST})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);