import React, {Component} from 'react';
import {connect} from 'react-redux';
import history from '../globals/history';
import {Router} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import {getActiveUser} from '../firebase/user/read';
import CreateDeckClassSelected from "./pages/create-deck/after-class-selection/create-deck";
import RedditPosts from "./pages/reddit/posts/posts";
import Deck from "./pages/decks/deck/deck";
import Expansions from "./pages/expansions/expansions";
import DeckSelection from "./pages/decks/deck-selection/deck-selection";
import NotFound from "../components/not-found";
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
import {fetchGameInfoRequest} from "../redux/game-info/actions";
import {fetchCardbacksRequest} from "../redux/cardbacks/actions";
import {fetchCardsRequest} from "../redux/cards/actions";
import {firebaseSignOutRequest} from "../redux/firebase/actions/sign-out.action";

class Main extends Component{
  handleSignOut = () =>{
    const {signOut} = this.props;
    signOut();
  };

  componentDidMount() {
    const {updateActiveUser, updateGameInfo, updateCards, fetchCardbacks} = this.props;
    getActiveUser((authenticated, data) => updateActiveUser({authenticated, ...data}));
    updateGameInfo();
    updateCards();
    fetchCardbacks();
  }

  render(){
    const {activeUser, playerClass} = this.props;
    return (
      <Router basename={process.env.PUBLIC_URL} history={history}>
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
            <Route path="/dashboard"                component={Dashboard} />
            <Route path="/:misc"                    component={Miscellaneous} />
            <Route path="*"                         component={NotFound} />
          </Switch>

            {/*/!*<Redirect from="twitch" to="twitch/all" />*!/*/}
            {/*/!*<Route path="twitch"         component={Streams}>*!/*/}
            {/*/!*<Route path=":channel"     component={Iframe}/>*!/*/}
            {/*/!*</Route>*!/*/}

          <Footer pathname="123"/>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = state =>{
  const {activeUser} = state.users;
  const {playerClass} = state.deckCreation;
  return {activeUser, playerClass};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGameInfo: () => dispatch(fetchGameInfoRequest()),
    updateCards: () => dispatch(fetchCardsRequest()),
    fetchCardbacks: ()=> dispatch(fetchCardbacksRequest()),
    updateActiveUser: (activeUser) => dispatch({
      type: 'UPDATE_ACTIVE_USER', payload: activeUser
    }),
    signOut: () => dispatch(firebaseSignOutRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);