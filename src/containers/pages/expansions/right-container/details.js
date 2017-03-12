import React, {Component} from 'react';
import {SharedTopbarTabs} from './assets/shared-topbar-tabs'
import {topbar_tabs} from '../../../../data/expansion-details'
import ValidateURL from '../../../shared-assets/validateUrl';

export class ExpansionDetails extends Component{

  content(expansion, details){
    return (
        <div className="extension-content">
          <SharedTopbarTabs expansion={expansion}
                            details={details}/>
        </div>
    )
  }

  validateUrlProps(args){
    const {expansion, details} = this.props.params;
    let details_path = topbar_tabs.filter(x=>x.expansion === expansion)[0].expansion_topbar_tabs.map(x=>x.url).includes(details);

    switch(args){
      case 'condition': return details_path;
      case 'content': return this.content(expansion, details);
      default: return null;
    }
  }

  render() {
    const {expansion} = this.props.params;
    return <ValidateURL condition={this.validateUrlProps('condition')}
                        content={this.validateUrlProps('content')}
                        page="expansion detail"
                        redirect={`expansions/${expansion}`}/>
  }
}