import React, {Component} from 'react';
import TextEditor from '../../../../../../shared-assets/editor/text-editor';
import Input from '../../../../../../shared-assets/form-assets/input';

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
        <div className={!this.props.visible ? 'display-none' : 'save-deck-form'}>
          <form className="save-deck">
            <Input id="deck_title"
                   type="text"
                   placeholder="SMOrc huntard"
                   handleInputChange={()=>this.handleInputChange}
                   value={deckTitle}/>
            Type:
            <select>
              <option>Standard</option>
            </select>
            Archetype:
            <select>
              <option>SMOrc huntard</option>
            </select>
            <TextEditor editorState={editorState}
                        handleInputChange={(e)=>this.handleInputChange(e, editorSelector)}
                        selector={editorSelector}/>
          </form>
        </div>
    )
  }
}