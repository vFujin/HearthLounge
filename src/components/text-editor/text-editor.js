import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {toolbar} from '../../globals/editor-icons';
import {handleBBCodeClick} from './utils/handle-bbcode-click';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';
import Icon from "../icon";
import FormattingHelp from "./formatting-help/formatting-help";

class TextEditor extends Component{
  constructor(){
   super();

   this.state = {
     formattingHelp: false
   }
  }

  mapToolbar = (editorId, previewId, value, handleTagInsertion) => {
    return toolbar.map(tool => {
      return (
          <li key={tool.name}>
            <Tooltip title={_.startCase(tool.name === 'hs-logo' ? tool.abbreviation : tool.name)} placement="bottom">
              <button type="button"
                      onClick={(e)=>handleBBCodeClick(e, value, handleTagInsertion, editorId, previewId)}
                      value={tool.abbreviation}>
                <Icon name={tool.name}/>
              </button>
            </Tooltip>
          </li>
      )
    });
  };

  handleFormattingHelp() {
    let formattingHelp = !this.state.formattingHelp;
    this.setState({
      formattingHelp
    });
  };

  render() {
    const {handleInputChange, editorId, previewId, value, handleTagInsertion} = this.props;
    const {formattingHelp} = this.state;
    return (
        <div className="text-editor">
          <ul className="toolbar">
            {this.mapToolbar(editorId, previewId, value, handleTagInsertion)}

            <li key="cancel" className={formattingHelp ? 'active' : undefined}>
              <Tooltip title="Formatting Help" placement="bottom">
                <button value="cancel" type="button" onClick={() => this.handleFormattingHelp()}>
                  <Icon name="help"/>
                </button>
              </Tooltip>
            </li>
          </ul>
          <div className={formattingHelp ? "grid-1-1" : "grid-1-0"}>
            <textarea id={editorId}
                      placeholder="Your text goes here..."
                      value={value}
                      onChange={handleInputChange}>
            </textarea>
            {formattingHelp
              && (
                    <div>
                      <div className="close" onClick={() => this.handleFormattingHelp()}><Icon name="cross"/></div>
                      <FormattingHelp />
                    </div>
                )
            }
          </div>
        </div>
    );
  }
}

export default TextEditor;

TextEditor.propTypes = {
  editorId: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleTagInsertion: PropTypes.func.isRequired,
  previewId: PropTypes.string,
  value: PropTypes.string
};