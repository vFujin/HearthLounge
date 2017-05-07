import React, {Component} from 'react';
import firebase from 'firebase';
import Navbar from './layout/navbar';
import {Footer} from './layout/footer';
import {getUserData, logout} from '../server/auth';
import 'antd/lib/tooltip/style/css';
import {Data} from '../data/cards-data';


export class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      authed: false,
      user: null,
      cards: [],
      name: [],
      faction: [],
      race: [],
      type: [],
      cardSet: [],
      mechanics: []
    };

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        getUserData(user.uid, (v)=>{
          this.setState({
            authed: true,
            user: v
          });
        });
      }
      else {
        this.setState({
          authed: false,
          user: null
        })
      }
    })
  }

  componentDidMount(){
    const getUniqueAttributes = (data, attribute) =>{
      let initialFiltering = data.filter(x=>x[attribute]).map(x=>x[attribute]);

      switch(attribute){
        case 'name':
        case 'faction':
        case 'race':
        case 'type': return initialFiltering.map(x=>x).filter((x, i, a)=>a.indexOf(x) === i);
        case 'cardSet':
        case 'cost': return data.filter(x=>x.cost).map(x=>x.cost).filter((x, i, a)=>a.indexOf(x) === i);
        case 'mechanics': return initialFiltering.reduce((a,b)=>a.concat(b)).map(x=>x.name).filter((x, i, a)=>a.indexOf(x) === i);
        default: return null;
      }
    };

    const cards = (cards) =>{
      this.setState({
        cards,
        name: getUniqueAttributes(cards, 'name'),
        mechanics: getUniqueAttributes(cards, 'mechanics'),
        faction: getUniqueAttributes(cards, 'faction'),
        race: getUniqueAttributes(cards, 'race'),
        type: getUniqueAttributes(cards, 'type'),
        cost: getUniqueAttributes(cards, 'cost'),
        cardSet: getUniqueAttributes(cards, 'cardSet')

      });
    };

    Data.fetchData(cards);
  }

  render(){
    const {authed, user, name, cards, faction, mechanics, race, type, cardSet} = this.state;
    const {children, location} = this.props;
    return (
        <div id="container">
          <Navbar url={location.pathname} user={user} handleLogout={(e)=>logout(e)}/>
          {React.cloneElement(children, {
            authed,
            user,
            name,
            cards,
            faction,
            mechanics,
            race,
            type,
            cardSet
          })}
          <Footer/>
        </div>
    );
  }
}


Main.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object
};

