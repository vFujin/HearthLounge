import React from 'react';
import {navItems} from '../../../../data/nav';
import Topbar from './topbar';
import ValidateURL from '../../../shared-assets/validateUrl';

const Adventure = props => {
  const {children, location, params} = props;
  const {adventure, details, boss} = params;

  const content = (adventure, details, boss) =>{
    return (
        <div className="content">
          <Topbar adventure={adventure}
                  details={details}
                  boss={boss}/>
          {children}
        </div>
    )
  };

  const validateUrlProps = (args) =>{
    let path       = location.pathname.split("/")[2],
        adventures = navItems.filter(x=>x.name === 'adventures').map(x=>x.submenu)[0].map(x=>x.url).includes(path);

    switch(args){
      case 'condition': return adventures;
      case 'content':   return content(adventure, details, boss);
      default:          return null;
    }
  };


  return <ValidateURL condition={validateUrlProps('condition')}
                      content={validateUrlProps('content')}
                      page="adventure"
                      redirect="adventures"/>
};

Adventure.propTypes = {
  children:   React.PropTypes.element.isRequired,
  location:   React.PropTypes.object.isRequired,
  params:     React.PropTypes.object.isRequired,
  adventure:  React.PropTypes.string,
  details:    React.PropTypes.string,
  boss:       React.PropTypes.string
};

export default Adventure;