import React, {Component} from 'react';
import TextEditor from '../../../../../../shared-assets/editor/text-editor';
import FormSelect from './select';
import 'antd/lib/select/style/css';
import _ from 'lodash';
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


  handleInputChange = (e) => {
    this.props.updateDeckText(e.target.value);
  };

  handleBBCodeClick = (e) =>{
    e.preventDefault();
    let value = e.currentTarget.value;
    let selector = this.props.deckText || '';

    let cursorPosStart = document.getElementById('textarea').selectionStart;
    let cursorPosEnd = document.getElementById('textarea').selectionEnd;

    let start = selector.substr(0, cursorPosStart);
    let selection = selector.substr(cursorPosStart, cursorPosEnd - cursorPosStart);
    let end = selector.substr(cursorPosEnd);

    this.props.updateDeckText(start + `[${value}]` + selection + `[/${value}]` + end);
  };

  handleSelectChange(v, selector){
    this.setState({
      [selector]: v
    })
  }


  shouldComponentUpdate(nextProps, nextState){
    // return this.state.deckDescription !== nextState.deckDescription ? true : false;
    _.map(nextState, (state, key)=>{
      if(state !== this.state[key]){
        console.log(`${key} != `);
        console.log('new: ', state);
        console.log('old: ', this.state[key])
      }
    }); return true;
  }


  render() {
    const {deckTitle} = this.state;
    return (
        <div className={this.props.visible ? 'display-none' : 'container__details'}>
          <div className="container__details--section container__details--description">
            <div className="section__header">
              <div className="line"></div>
              <h1>About deck</h1>
            </div>
            <div className="section__body">
              <form className="inline section__body--background">
                <div className="section__body--upperContainer">
                  <div className="inner inner__left">
                    <div className="input-wrapper">
                      <label htmlFor="deck_title">Deck title:</label>
                      <input id="deck_title"
                             type="text"
                             placeholder="Deck title i.e SMOrc hunter"
                             onChange={this.handleInputChange}
                             value={deckTitle}/>
                    </div>
                    <FormSelect section="mode"
                                handleSelectChange={this.handleSelectChange}/>
                    <FormSelect section="archetype" hsClass={this.props.params.class}
                                handleSelectChange={this.handleSelectChange}/>
                  </div>
                    <div className="inner inner__right">
                      <button type="submit" className="btn-pearl">Submit</button>
                    </div>
                </div>

                <TextEditor handleInputChange={this.handleInputChange}
                            handleBBCodeClick={this.handleBBCodeClick}
                            value={this.props.deckText} />
              </form>
            </div>
          </div>

          <div className="container__details--section container__details--description">
            <div className="section__header">
              <div className="line"></div>
              <h1>Preview</h1>
            </div>
            <div className="section__body">
              {this.props.deckText}
            </div>
          </div>
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