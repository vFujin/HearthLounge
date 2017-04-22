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


  handleInputChange = (editorState) => {
    this.props.updateDeckText(editorState);
  };

  handleSelectChange(v, selector){
    this.setState({
      [selector]: v
    })
  }

  handleEditorImageUpload(file){
    // return new Promise(
    //     (resolve, reject)=>{
    //       resolve({data: {link: 'none'}});
    //     }
    // )
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
    const {deckTitle, deckDescription, editorState} = this.state;
    const editorSelector = 'deckDescription';
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

                <TextEditor/>
              </form>
            </div>
          </div>

          <div className="container__details--section container__details--description">
            <div className="section__header">
              <div className="line"></div>
              <h1>Preview</h1>
            </div>
            <div className="section__body">
              {}
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
      type: 'SET_DECK_TEXT',
      deckText
    })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(DeckOptions)