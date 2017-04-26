import React, {Component} from 'react';
import AboutDeck from './save-deck-assets/about-deck';
import Preview from './save-deck-assets/preview';
import {saveDeck} from '../../../../../../../server/deck-creation';
import 'antd/lib/select/style/css';
import {connect} from 'react-redux';

// const DeckOptions = ({activeClass, user, deck, deckType, deckTitle, deckArchetype, deckText,  updateDeckProperty, visible}) => {
//
//   const handleInputChange = (e) => {
//     let target = e.currentTarget.id;
//     let value = e.target.value;
//     updateDeckProperty({[target]: value});
//   };
//
//   const handleSelectChange = (v) => {
//
//   };
//
//   const handleSaveDeckSubmit = (e) => {
//     e.preventDefault();
//     saveDeck(activeClass, user.username, deckTitle, deckType, deckArchetype, deck, deckText, user.uid);
//   };
//
//   return (
//       <div className={visible ? 'display-none' : 'container__details'}>
//         <AboutDeck activeClass={activeClass}
//                    deckTitle={deckTitle}
//                    deckText={deckText}
//                    handleInputChange={handleInputChange}
//                    handleSelectChange={handleSelectChange}
//                    handleSaveDeckSubmit={(e) => handleSaveDeckSubmit(e)}
//                    handleTagInsertion={updateDeckProperty}/>
//         <Preview deckText={deckText}/>
//
//       </div>
//   )
// };

class DeckOptions extends Component {

  // componentWillUpdate(nextProps){
  //   console.log(nextProps);
  // }
  handleInputChange = (e) => {
    let target = e.currentTarget.id;
    let value = e.target.value;
    this.props.updateDeckProperty({[target]: value});
  };

  handleSelectChange = (v) => {

  };

  handleSaveDeckSubmit = (e) => {
    e.preventDefault();
    // saveDeck(this.props.activeClass, this.props.user.username, deckTitle, deckType, deckArchetype, deck, deckText, user.uid);
  };

  render() {
    return (
        <div className={this.props.visible ? 'display-none' : 'container__details'}>
          <AboutDeck activeClass={this.props.activeClass}
                     deckTitle={this.props.deckTitle}
                     deckText={this.props.deckText}
                     handleInputChange={this.handleInputChange}
                     handleSelectChange={this.handleSelectChange}
                     handleSaveDeckSubmit={(e) => this.handleSaveDeckSubmit(e)}
                     handleTagInsertion={this.props.updateDeckProperty}/>
          <Preview deckText={this.props.deckText}/>

        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {deckTitle, deckText} = state.deckOptions;
  return {
    deckTitle, deckText
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckProperty: (props) => dispatch({
      type: 'EDIT_DECK_PROPERTY', props
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckOptions)