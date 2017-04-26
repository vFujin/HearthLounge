import React, {Component} from 'react';
import TextEditor from '../../../../../../shared-assets/editor/text-editor';
import InnerLeftContainer from './save-deck-assets/about-deck-inner-left-container';
import InnerRightContainer from './save-deck-assets/about-deck-inner-right-container';

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

    switch(value){
      case 'url': return this.props.updateDeckText(start + `[${value}][li]` + selection + `[/li][/${value}]` + end);
      case 'ul':
      case 'ol':   return this.props.updateDeckText(start + `[${value}][li]` + selection + `[/li][/${value}]` + end);
      case 'card': return this.props.updateDeckText(start + `[${value}]` + selection + end);
      case value:  return this.props.updateDeckText(start + `[${value}]` + selection + `[/${value}]` + end);
    }
  };

  handlePreviewCompiling(text){
    if(text !== undefined) {
      let s = text.replace(/</g, '<')
          .replace(/>/g, '>')
          .replace(/\(/g, '(')
          .replace(/\)/g, ')')
          .replace(/;/g, ';')
          //affix
          .replace(/\[b]/g, '<b>')
          .replace(/\[i]/g, '<i>')
          .replace(/\[u]/g, '<u>')
          .replace(/\[s]/g, '<del>')
          .replace(/\[url]/g, '<a href="">')
          .replace(/\[q]/g, '<q>')
          .replace(/\[em]/g, '<iframe src="">')
          .replace(/\[ul]/g, '<ul><li>')
          .replace(/\[ol]/g, '<ol><li>')
          .replace(/\[li]/g, '<li>')
          .replace(/\[card]/g, '{card name}')
          //suffix
          .replace(/\[\/b]/g, '</b>')
          .replace(/\[\/i]/g, '</i>')
          .replace(/\[\/u]/g, '</u>')
          .replace(/\[\/s]/g, '</del>')
          .replace(/\[\/url]/g, '</a>')
          .replace(/\[\/q]/g, '</q>')
          .replace(/\[\/em]/g, '</iframe>')
          .replace(/\[\/ul]/g, '</li></ul>')
          .replace(/\[\/ol]/g, '</li></ol>')
          .replace(/\[\/li]/g, '</li>');

      function createMarkup(){
        return {__html: s}
      }
      return <div dangerouslySetInnerHTML={createMarkup()} />
    }
  }

  handleSelectChange(v, selector){
    this.setState({
      [selector]: v
    })
  }

  handleSaveDeckSubmit(e){
    e.preventDefault;
  }

  shouldComponentUpdate(nextProps, nextState){
    _.map(nextState, (state, key)=>{
      if(state !== this.state[key]){
        console.log(`${key} != `);
        console.log('new: ', state);
        console.log('old: ', this.state[key])
      }
    });
    return true;
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
                  <InnerLeftContainer activeClass={this.props.activeClass}
                                      deckTitle={deckTitle}
                                      handleInputChange={this.handleInputChange}
                                      handleSelectChange={this.handleSelectChange}/>
                  <InnerRightContainer handleSaveDeckSubmit={(e)=>this.handleSaveDeckSubmit(e)}/>
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
              {this.handlePreviewCompiling(this.props.deckText)}
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