import React, {Component} from 'react';
import TextEditor from '../../../../../../shared-assets/editor/text-editor';
import Input from '../../../../../../shared-assets/form-assets/input';
import FormSelect from './select';
import 'antd/lib/select/style/css';
export class DeckOptions extends Component {
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


  handleInputChange(editorState, selector) {
    let textarea = document.getElementById(selector).value;
    this.setState({
      editorState,
      deckDescription: textarea
    })
  }


  render() {
    const {deckTitle, deckType, deckArchetype, deckDescription, editorState} = this.state;
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
                  <Input id="deck_title"
                         type="text"
                         placeholder="SMOrc huntard"
                         handleInputChange={()=>this.handleInputChange}
                         value={deckTitle}/>
                  <FormSelect section="mode"/>
                  <FormSelect section="archetype" params={this.props.params.class}/>

                </div>
                <div className="text-editor">
                  <TextEditor editorState={editorState}
                              handleInputChange={(e)=>this.handleInputChange(e, editorSelector)}
                              selector={editorSelector}/>
                </div>
              </form>
            </div>
          </div>

          <div className="container__details--section container__details--description">
            <div className="section__header">
              <div className="line"></div>
              <h1>Preview</h1>
            </div>
            <div className="section__body">
              {deckDescription}
            </div>
          </div>
        </div>
    )
  }
}