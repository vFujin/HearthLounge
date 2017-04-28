import React from 'react';
import AboutDeck from './save-deck-assets/about-deck';
import Preview from './save-deck-assets/preview';
import {saveDeck} from '../../../../../../../server/deck-creation';
import {debounceEventHandler} from '../../../../../../../utils/debouncer';
import 'antd/lib/select/style/css';
import {connect} from 'react-redux';
import _ from 'lodash';


const DeckOptions = ({activeClass, user, deck, deckType, deckTitle, deckArchetype, deckText,  updateDeckProperty, visible}) => {

  const handleInputChange = (e) => {
    let target = e.target.id;
    let value = e.target.value;
    updateDeckProperty({[target]: value});
  };

  const handleSelectChange = (v, selector) => {
    let key= `deck${_.upperFirst(selector)}`;
    updateDeckProperty({[key]: v})
  };

  const handleSaveDeckSubmit = (e) => {
    e.preventDefault();
    console.log(deckType);
    saveDeck(activeClass, user.username, deckTitle, deckType, deckArchetype, deck, deckText, user.uid);
  };


  return (
      <div className={visible ? 'display-none' : 'container__details'}>
        <AboutDeck activeClass={activeClass}
                   deckTitle={deckTitle}
                   deckType={deckType}
                   deckArchetype={deckArchetype}
                   deckText={deckText}
                   handleInputChange={debounceEventHandler(handleInputChange, 300)}
                   handleSelectChange={handleSelectChange}
                   handleSaveDeckSubmit={(e)=>handleSaveDeckSubmit(e)}
                   handleTagInsertion={updateDeckProperty}/>
        <Preview deckText={deckText}/>

      </div>
  )
};

// class DeckOptions extends Component {
//   componentWillUpdate(nextProps){
//     console.log(nextProps)
//   }
//
//   handleInputChange = (e) => {
//     let target = e.target.id;
//     let value = e.target.value;
//     this.props.updateDeckProperty({[target]: value});
//   };
//
//   handleSelectChange = (v, selector) => {
//     let key= `deck${_.upperFirst(selector)}`;
//     this.props.updateDeckProperty({[key]: v})
//   };
//
//   handleSaveDeckSubmit = (e) => {
//     e.preventDefault();
//     saveDeck(this.props.activeClass, this.props.user.username, this.props.deckTitle, this.props.deckType, this.props.deckArchetype, this.props.deck, this.props.deckText, this.props.user.uid);
//   };
//
// render() {
//   return (
//       <div className={this.props.visible ? 'display-none' : 'container__details'}>
//         <AboutDeck activeClass={this.props.activeClass}
//                    deckTitle={this.props.deckTitle}
//                    deckType={this.props.deckType}
//                    deckArchetype={this.props.deckArchetype}
//                    deckText={this.props.deckText}
//                    handleInputChange={this.handleInputChange}
//                    handleSelectChange={this.handleSelectChange}
//                    handleSaveDeckSubmit={(e) => this.handleSaveDeckSubmit(e)}
//                    handleTagInsertion={this.updateDeckProperty}/>
//         <Preview deckText={this.props.deckText}/>
//
//       </div>
//   )
// }
// }



const mapStateToProps = (state) => {
  const {deckTitle, deckType, deckArchetype, deckText} = state.deckOptions;
  return {
    deckTitle, deckType, deckArchetype, deckText
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckProperty: (props) => (dispatch({
      type: 'EDIT_DECK_PROPERTY', props
    }))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckOptions)