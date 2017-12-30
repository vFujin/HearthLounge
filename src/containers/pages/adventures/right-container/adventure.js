import React, {PureComponent} from 'react';
import Topbar from './topbar';
import Content from './content/content'
import {adventure_details} from "../../../../globals/adventure-details";

class Adventure extends PureComponent{
  render(){
    const {match, location} = this.props;
    const {adventure, details} = match.params;
    const detailsChild = location.pathname.split("/")[4];
    let activeAdventure = adventure_details.filter(a => a.url === adventure)[0];
    return (
        <div className='container__page--inner container__page--right'>
          <Topbar adventure={adventure}
                  details={details}
                  boss={detailsChild}/>

          <Content adventure={activeAdventure}
                   detailsChild={detailsChild}
                   details={details}/>
        </div>
    )
  }
}


export default Adventure;