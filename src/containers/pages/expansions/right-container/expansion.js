import React from 'react';
import {navItems} from '../../../../data/nav';
import SharedTopbarTabs from './assets/shared-topbar-tabs'
import ValidateURL from '../../../shared-assets/validateUrl';

const Expansion = ({cards, children, location, params}) => {
  // const {details} = params;

  //
  // const content = (details, expansion) =>{
  //   return (
  //     <div className="content">
  //       <SharedTopbarTabs expansion={expansion}
  //                         details={details}
  //                         cards={cards}/>
  //       {React.cloneElement(children, {cards})}
  //     </div>
  //   )
  // };
  //
  // const validateUrlProps = (args) =>{
  //
  //   let path       = location.pathname.split("/")[2],
  //       expansions = navItems.filter(x=>x.name === 'expansions').map(x=>x.submenu)[0].map(x=>x.url).includes(path);
  // console.log("foo", path)
  //   switch(args){
  //     case 'condition': return expansions;
  //     case 'content': return content(details, expansion);
  //     default: return null;
  //   }
  // };
  //
  //   return <ValidateURL condition={validateUrlProps('condition')}
  //                       content={validateUrlProps('content')}
  //                       page="expansion"
  //                       redirect="expansions"/>



  return (
      <div className="content">

      </div>
  )
};

export default Expansion;