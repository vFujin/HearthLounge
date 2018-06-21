import React, {Component} from 'react';
import {connect} from 'react-redux';
import history from '../globals/history';
import {Router} from 'react-router-dom';
import NavbarDesktop from './layout/navbar/navbar-desktop';
import Footer from './layout/footer';
import {getActiveUser} from '../firebase/user/read';
import {fetchGameInfoRequest} from "../redux/game-info/actions";
import {firebaseSignOutRequest} from "../redux/firebase/actions/sign-out.action";
import LogoSVG from "../components/logo";
import {updateWindowWidth} from "../redux/app/window-size/actions";
import {fetchCardsSuccess} from "../redux/cards/actions";
import {fetchCardbacksSuccess} from "../redux/cardbacks/actions";
import NavbarMobile from "./layout/navbar/navbar-mobile";
import {toggleMobileMenu} from "../redux/app/mobile-menu/actions";
import Routes from "./Routes";
import 'antd/lib/tooltip/style/css';
import 'antd/lib/dropdown/style/css';
import 'antd/lib/popover/style/css';
import 'antd/lib/message/style/css';
import 'antd/lib/select/style/css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      loading: false
    };
  }

  handleSignOut = () =>{
    const {signOut} = this.props;
    signOut();
  };

  updateWindowWidth = () => this.props.updateWindowWidth(window.innerWidth);

  componentDidMount() {
    document.title = "HearthLounge";
    // setTimeout(() => this.setState({ loading: false }), 1000);
    const {updateActiveUser, updateGameInfo, updateCards, updateCardbacks} = this.props;

    getActiveUser((authenticated, data) => updateActiveUser({authenticated, ...data}));
    updateGameInfo();
    if(localStorage.hearthloungeCards){
      updateCards(JSON.parse(localStorage.hearthloungeCards));
    }
    if(localStorage.hearthloungeCardbacks){
      updateCardbacks(JSON.parse(localStorage.hearthloungeCardbacks));
    }
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  render(){
    const {loading} = this.state;
    const {activeUser, playerClass, windowWidth, mobileMenuActive} = this.props;

    if(loading){
      return (
        <div className="preload">
          <LogoSVG dotsColor="#00a99c" id="preload"/>
        </div>
      );
    }

    return (
      <Router history={history}>
        <div id="container">
          {windowWidth > 1365
            ? <NavbarDesktop activeUser={activeUser}
                             playerClass={playerClass}
                             handleSignOut={this.handleSignOut}/>
            : <NavbarMobile activeUser={activeUser}
                            playerClass={playerClass}
                            mobileMenuActive={mobileMenuActive}
                            handleSignOut={this.handleSignOut}/>
          }
          <Routes mobileMenuActive={mobileMenuActive} windowWidth={windowWidth}/>
          <Footer pathname="123"/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state =>{
  const {users, info, deckCreation, app} = state;
  const {activeUser} = users;
  const {patch} = info;
  const {playerClass} = deckCreation;
  const {windowWidth} = app.windowSize;
  const {mobileMenuActive} = app.menu;
  return {activeUser, playerClass, patch, windowWidth, mobileMenuActive};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGameInfo: () => dispatch(fetchGameInfoRequest()),
    updateCards: cards => dispatch(fetchCardsSuccess(cards)),
    updateCardbacks: cards => dispatch(fetchCardbacksSuccess(cards)),
    updateActiveUser: (activeUser) => dispatch({
      type: 'UPDATE_ACTIVE_USER', payload: activeUser
    }),
    toggleMobileMenu: payload => dispatch(toggleMobileMenu(payload)),
    signOut: () => dispatch(firebaseSignOutRequest()),
    updateWindowWidth: payload => dispatch(updateWindowWidth(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
