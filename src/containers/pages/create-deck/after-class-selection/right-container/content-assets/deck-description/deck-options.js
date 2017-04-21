import React, {Component} from 'react';
import TextEditor from '../../../../../../shared-assets/editor/text-editor';
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
                             onChange={()=>this.handleInputChange}
                             value={deckTitle}/>
                    </div>
                    <FormSelect section="mode" handleSelectChange={(v)=>this.handleSelectChange(v, 'deckType')}/>
                    <FormSelect section="archetype" hsClass={this.props.params.class} handleSelectChange={(v)=>this.handleSelectChange(v, 'deckArchetype')}/>
                  </div>
                    <div className="inner inner__right">
                      <button type="submit" className="btn-pearl">Submit</button>
                    </div>
                </div>

                <TextEditor editorState={editorState}
                            handleInputChange={(e)=>this.handleInputChange(e, editorSelector)}
                            handleEditorImageUpload={(e, file)=>this.handleEditorImageUpload(e, file)}
                            selector={editorSelector}/>
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