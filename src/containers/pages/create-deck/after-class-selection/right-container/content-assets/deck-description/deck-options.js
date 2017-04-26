import React, {Component} from 'react';
import AboutDeck from './save-deck-assets/about-deck';
import Preview from './save-deck-assets/preview';
import 'antd/lib/select/style/css';
import {connect} from 'react-redux';

class DeckOptions extends Component {
  constructor(props){
    super(props);

    this.state={
      deckTitle: '',
      deckType: '',
      deckArchetype: '',
      deckDescription: '',
      editorState: ''
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps !== this.props.deckText) {
      return true;
    }
  }

  handleInputChange = (e) => {
    this.props.updateDeckText(e.target.value);
  };

  handleSelectChange(v, selector){
    this.setState({
      [selector]: v
    })
  }

  handleSaveDeckSubmit(e){
    e.preventDefault;
  }

  render() {
    return (
        <div className={this.props.visible ? 'display-none' : 'container__details'}>
          <AboutDeck activeClass={this.props.activeClass}
                     deckTitle={this.state.deckTitle}
                     deckText={this.props.deckText}
                     handleInputChange={this.handleInputChange}
                     handleSelectChange={this.handleSelectChange}
                     handleSaveDeckSubmit={(e)=>this.handleSaveDeckSubmit(e)}
                     handleTagInsertion={this.props.updateDeckText}/>
          <Preview deckText={this.props.deckText}/>

        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deckText: state.deckOptions.deckText
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckText: (deckText) => dispatch({
      type: 'SET_DECK_TEXT', deckText
    })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(DeckOptions)